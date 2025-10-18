// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsLYaSYeknKRJ8XSVexloWhRf1a9OJf6U",
  authDomain: "task9c-da2ae.firebaseapp.com",
  projectId: "task9c-da2ae",
  storageBucket: "task9c-da2ae.firebasestorage.app",
  messagingSenderId: "358934792797",
  appId: "1:358934792797:web:ccb1ed7a4e479d5a73dbb4",
  measurementId: "G-2GERH60M50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export them
export { auth, db };