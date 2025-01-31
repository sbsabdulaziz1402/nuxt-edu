import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCOKqAbu4AITTiEwsPya8cH_P0o3HQ9xL0",
    authDomain: "fibertextile-e96f5.firebaseapp.com",
    projectId: "fibertextile-e96f5",
    storageBucket: "fibertextile-e96f5.firebasestorage.app",
    messagingSenderId: "14801803496",
    appId: "1:14801803496:web:fcf5074d781e1eefadd15d"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('firebaseApp', firebaseApp);
  nuxtApp.provide('db', db);
  nuxtApp.provide('auth', auth);
});