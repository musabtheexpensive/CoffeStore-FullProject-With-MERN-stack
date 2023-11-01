// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOHiNp7iSztX-K_M0ijAESNJNfE5rtR5k",
  authDomain: "coffee-store-fullproject.firebaseapp.com",
  projectId: "coffee-store-fullproject",
  storageBucket: "coffee-store-fullproject.appspot.com",
  messagingSenderId: "552404215268",
  appId: "1:552404215268:web:f2074ae5aa0c93c9aed3f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;