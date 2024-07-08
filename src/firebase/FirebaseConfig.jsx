// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTPhMmQLVGf0noIkwQhWNV8SpZDAn-_6o",
  authDomain: "myecom-855de.firebaseapp.com",
  projectId: "myecom-855de",
  storageBucket: "myecom-855de.appspot.com",
  messagingSenderId: "629297024797",
  appId: "1:629297024797:web:bac8837f0c755b021c5bf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}