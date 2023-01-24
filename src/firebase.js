// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBojhiesv47LGbj3m5ZlS_oZgWFhd4PrCE",
  authDomain: "pmtool-d2d69.firebaseapp.com",
  projectId: "pmtool-d2d69",
  storageBucket: "pmtool-d2d69.appspot.com",
  messagingSenderId: "876030844780",
  appId: "1:876030844780:web:55f9c708d073701f655d49",
  measurementId: "G-G6BLGRSTYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);