import React from "react";
import {
  signInWithGoogle,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import SignUpForm from "../../signup/signupform";
import SignInForm from "../../signin/signinfrom";
import './authentication.scss'
function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
