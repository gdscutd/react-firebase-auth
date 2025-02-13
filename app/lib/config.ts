const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB33o5q4AhXtVHbpPLlCJT4Vy2OOa9UanU",
  authDomain: "gdsc-workshop-6507d.firebaseapp.com",
  projectId: "gdsc-workshop-6507d",
  storageBucket: "gdsc-workshop-6507d.firebasestorage.app",
  messagingSenderId: "433139504580",
  appId: "1:433139504580:web:2e2521eccdd62a226f4091"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);