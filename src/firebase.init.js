// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW0VYi9ImAE_yuTiZmPEgTGzNl6gNK5bs",
  authDomain: "doctors-portal-624b0.firebaseapp.com",
  projectId: "doctors-portal-624b0",
  storageBucket: "doctors-portal-624b0.appspot.com",
  messagingSenderId: "1039847272086",
  appId: "1:1039847272086:web:c76e2c7956858b8f121cb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
