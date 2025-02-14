import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_KEY;

export const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "gdsc-workshop-6507d.firebaseapp.com",
  projectId: "gdsc-workshop-6507d",
  storageBucket: "gdsc-workshop-6507d.firebasestorage.app",
  messagingSenderId: "433139504580",
  appId: "1:433139504580:web:2e2521eccdd62a226f4091",
};

const firebase = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase);
