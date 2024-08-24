// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDNZwCEmYGdYys2FOTiTdT84m6TExxNkFM",
  authDomain: "cl-react-chatapp.firebaseapp.com",
  projectId: "cl-react-chatapp",
  storageBucket: "cl-react-chatapp.appspot.com",
  messagingSenderId: "665417807192",
  appId: "1:665417807192:web:3f921c9312062db598a12d",
  // measurementId: "G-T9DBN3EDZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();