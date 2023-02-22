// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0gpij4aZ-DJPEZFp0pmBX--bkf4jaoQA",
  authDomain: "insta-clone-d7329.firebaseapp.com",
  projectId: "insta-clone-d7329",
  storageBucket: "insta-clone-d7329.appspot.com",
  messagingSenderId: "10483652086",
  appId: "1:10483652086:web:cfa3f4f59c248f23ba63d7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
