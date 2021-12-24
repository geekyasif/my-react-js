import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCk8CEGTWtCfqkxhGWZYnzfk2WWrGxibXk",
    authDomain: "fir-learning-68598.firebaseapp.com",
    projectId: "fir-learning-68598",
    storageBucket: "fir-learning-68598.appspot.com",
    messagingSenderId: "1071846304887",
    appId: "1:1071846304887:web:d5dc09a00e3ff4c9672a72"
});

const db = firebaseApp.getFirestore();
export {db}

