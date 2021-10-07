// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9WH_i6sxYhXCK6ALuP_91Di7BuXTi_GQ",
  authDomain: "squash-social.firebaseapp.com",
  databaseURL: "https://squash-social-default-rtdb.firebaseio.com",
  projectId: "squash-social",
  storageBucket: "squash-social.appspot.com",
  messagingSenderId: "464327756223",
  appId: "1:464327756223:web:9d1d051c9ac393a7d7b90a",
  measurementId: "G-FFBQJ18XCT"
};

console.log("Test")

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);