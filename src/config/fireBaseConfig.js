// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGxgl3X6bx5Afu2GyCTVxfivwoBRcMdR8",
  authDomain: "netflixclone-1cc64.firebaseapp.com",
  projectId: "netflixclone-1cc64",
  storageBucket: "netflixclone-1cc64.firebasestorage.app",
  messagingSenderId: "790681966764",
  appId: "1:790681966764:web:68ebf062621af8bfdfe709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth}