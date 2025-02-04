import { getAuth, onAuthStateChanged } from "firebase/auth";
import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";


export default defineNuxtRouteMiddleware( ( to, from ) => {
    if (process.server) return;
    const excludedRoutes = ['/auth', '/auth/sign-up', '/auth/login'];

    if(excludedRoutes.includes(to.path)) {
        console.log('auth')
        return;
    }

    const auth = getAuth();

    return new Promise( ( resolve ) => {
        onAuthStateChanged(auth, (user)=> {
            if(user) {
                resolve();
            } else {
                resolve(navigateTo('/auth'));
            }
        })
    })
})