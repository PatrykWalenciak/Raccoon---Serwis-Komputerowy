// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKhmH9Lp4Th2e4MVvuIrmj7ptVYAL6AT4",
  authDomain: "raccoon--serwis-komputerowy.firebaseapp.com",
  projectId: "raccoon--serwis-komputerowy",
  storageBucket: "raccoon--serwis-komputerowy.firebasestorage.app",
  messagingSenderId: "234738703277",
  appId: "1:234738703277:web:915ec5e77b28a3ec12df24",
  measurementId: "G-0PN4P9XEEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
