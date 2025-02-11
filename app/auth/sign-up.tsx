import React from "react";

import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const SignUp = () => {
  const auth = getAuth()
  const email = ''
  const password = ''
  createUserWithEmailAndPassword(auth, "testuser1@gmail.com", "Hello123he")
  .then(()=>{
    console.log("User created successfully!")
})
  .catch((error)=>{
    const errorCode = error.code;
                if (errorCode === 'auth/email-already-in-use') {
                    console.log("Email already exists!");
                }
  })




  return <div>SignUp</div>;
};


export default SignUp;
