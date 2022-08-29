// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB-2jibbyfhI-LVfP_8T2VnDEnwmRiV2Q",
  authDomain: "medium-app-12919.firebaseapp.com",
  projectId: "medium-app-12919",
  storageBucket: "medium-app-12919.appspot.com",
  messagingSenderId: "41543850058",
  appId: "1:41543850058:web:bff96064725ef435e66eb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)


export {auth, provider, db}