// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpeDIUfa7fbBlZtO9lZlfiwE6pQ6BCTg4",
  authDomain: "authentication-using-context.firebaseapp.com",
  projectId: "authentication-using-context",
  storageBucket: "authentication-using-context.firebasestorage.app",
  messagingSenderId: "1039270078337",
  appId: "1:1039270078337:web:b33f02fcf2a496b0c2ea80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth =getAuth(app)
export default Auth;