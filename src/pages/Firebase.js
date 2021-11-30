// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAft6vo-XCOKd4W7vSbluT9gQJmmQkRWKM",
  authDomain: "clone-1a568.firebaseapp.com",
  projectId: "clone-1a568",
  storageBucket: "clone-1a568.appspot.com",
  messagingSenderId: "106164472517",
  appId: "1:106164472517:web:ff415e75e08cca6ee4beac",
  measurementId: "G-2XRK7MTCDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);