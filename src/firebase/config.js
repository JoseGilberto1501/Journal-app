// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDFo9x6AYmFBuhT5ubBW2cVZ_C31m839w",
  authDomain: "react-cursos-8688b.firebaseapp.com",
  projectId: "react-cursos-8688b",
  storageBucket: "react-cursos-8688b.appspot.com",
  messagingSenderId: "1006710187956",
  appId: "1:1006710187956:web:0c94d36ae3bccba6c2b4e1",
  measurementId: "G-JK8XY419TN"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);