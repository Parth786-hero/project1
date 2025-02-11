// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPyzS3JCGfJqZ6i40DRHo5j-xpjW7-bgA",
  authDomain: "my-app-525d0.firebaseapp.com",
  projectId: "my-app-525d0",
  storageBucket: "my-app-525d0.firebasestorage.app",
  messagingSenderId: "23405743643",
  appId: "1:23405743643:web:d847abbd9bfd0b3bc032be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);