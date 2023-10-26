// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnqWgs7p6WgOQtzjhey-pi1nE2V7hYN2A",
  authDomain: "application-auth-182d5.firebaseapp.com",
  projectId: "application-auth-182d5",
  storageBucket: "application-auth-182d5.appspot.com",
  messagingSenderId: "475687818760",
  appId: "1:475687818760:web:19b7787130becf9d60e3bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);