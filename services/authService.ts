// import { auth } from "~/plugins/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const { $auth } = useNuxtApp();

// Sign Up Function
export const signUp = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword($auth, email, password);
  return userCredential.user;
};

// Sign In Function
export const signIn = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword($auth, email, password);
  return userCredential.user;
};

// Sign Out Function
export const logOut = async () => {
  await signOut($auth);
};