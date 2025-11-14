// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcMdYoXism8upFC4Qua70rP152MyQe0OQ",
  authDomain: "my-portfolio-2f633.firebaseapp.com",
  projectId: "my-portfolio-2f633",
  storageBucket: "my-portfolio-2f633.firebasestorage.app",
  messagingSenderId: "834043739418",
  appId: "1:834043739418:web:12829bf2b2d27338df80a3",
  measurementId: "G-QJE0CF0NPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);