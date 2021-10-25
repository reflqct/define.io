import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBp9LrYJBTggoAapn5fCEPMUfFVHV9Xqk",
    authDomain: "define-e17c4.firebaseapp.com",
    projectId: "define-e17c4",
    storageBucket: "define-e17c4.appspot.com",
    messagingSenderId: "273190810158",
    appId: "1:273190810158:web:96f25764c979bf9310e5bf",
    measurementId: "G-P40WGQ1LYE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);