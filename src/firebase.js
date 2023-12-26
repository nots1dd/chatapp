// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Z2ZvmFmGW_XbyKD9kz8c7Pzg4PXLsSg",
  authDomain: "chatapp-f3fe2.firebaseapp.com",
  projectId: "chatapp-f3fe2",
  storageBucket: "chatapp-f3fe2.appspot.com",
  messagingSenderId: "1033122277197",
  appId: "1:1033122277197:web:c3834327a9c10a92a0f904"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();