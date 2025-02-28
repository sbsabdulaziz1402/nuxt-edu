import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCOKqAbu4AITTiEwsPya8cH_P0o3HQ9xL0",
    authDomain: "fibertextile-e96f5.firebaseapp.com",
    databaseURL: "https://fibertextile-e96f5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fibertextile-e96f5",
    storageBucket: "fibertextile-e96f5.firebasestorage.app",
    messagingSenderId: "14801803496",
    appId: "1:14801803496:web:fcf5074d781e1eefadd15d"
  };

const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);
const auth = getAuth(fireApp);
const database = getDatabase(fireApp);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('fireApp', fireApp);
  nuxtApp.provide('db', db);
  nuxtApp.provide('auth', auth);
  nuxtApp.provide('realbase', database);
});