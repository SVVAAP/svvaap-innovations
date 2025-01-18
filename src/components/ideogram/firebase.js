import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJ-2vtUbHPEFHny4QAHfd_-9wROePDybM",
    authDomain: "ideogram-2ceff.firebaseapp.com",
    projectId: "ideogram-2ceff",
    storageBucket: "ideogram-2ceff.firebasestorage.app",
    messagingSenderId: "740771862880",
    appId: "1:740771862880:web:d32a17cbe64c2a292c2605",
    measurementId: "G-PXM0B32F6W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Initialize Google Provider
const provider = new GoogleAuthProvider();

export { auth, provider };
