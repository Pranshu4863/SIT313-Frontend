// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS5Nqz-8LCVWufyPKDR4m2zkeoWCD9ddo",
  authDomain: "task8d-fe18b.firebaseapp.com",
  projectId: "task8d-fe18b",
  storageBucket: "task8d-fe18b.firebasestorage.app",
  messagingSenderId: "312664418477",
  appId: "1:312664418477:web:1560befa952e110be33e24",
  measurementId: "G-7ZVJW0RPTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);

