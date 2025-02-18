import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_KEY;


export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const firebase = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase);
