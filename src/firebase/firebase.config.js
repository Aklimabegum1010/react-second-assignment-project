// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7XHwxp8bl7wQItxhn2Wy73MdQ1hBfmjA",
  authDomain: "react-second-assignment.firebaseapp.com",
  projectId: "react-second-assignment",
  storageBucket: "react-second-assignment.appspot.com",
  messagingSenderId: "282592588172",
  appId: "1:282592588172:web:7d4c0296e494103bb466a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export default auth;