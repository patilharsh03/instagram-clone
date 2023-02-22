// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbS2Y78_oD1WtHw41VIOpzpxXVIKrNZZE",
  authDomain: "insta-clone-b3944.firebaseapp.com",
  projectId: "insta-clone-b3944",
  storageBucket: "insta-clone-b3944.appspot.com",
  messagingSenderId: "907783118691",
  appId: "1:907783118691:web:8c7c18d00bb7d9c4213d56"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
