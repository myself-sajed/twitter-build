// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCB9qYFES2ou_yfALDvJS5oeeS1acq9f4M",
    authDomain: "twitter-reprised.firebaseapp.com",
    projectId: "twitter-reprised",
    storageBucket: "twitter-reprised.appspot.com",
    messagingSenderId: "1020601848650",
    appId: "1:1020601848650:web:2537ea8212db0f498d67b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db, app };