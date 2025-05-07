import React, { useContext, useState } from "react";
import {
  signInWithGoogle,
  createUserDocumentFromAuth,
  signInWithEmailAndPass,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../forminput/FormInput";
import Button from "../button/Button";
import "../signup/signup.scss";
function SignInForm() {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const { user } = await signInWithEmailAndPass(email, password);
      
      } catch (error) {
        switch (error.code) {
          case "auth/wrong-password":
            alert("Incorrect Email and Password");
            break;
          case "auth/invalid-credential":
            alert("Incorrect Email and Password");
            break;
        }
        if (error.code === "auth/wrong-password") {
          alert("Incorrect Email and Password");
        }
        console.log(error);
      }
    }
  };
  const logGoogleUser = async () => {
    const response = await signInWithGoogle();
    createUserDocumentFromAuth(response.user);
  };
  return (
    <div className="sign-up-container">
      <form action="" onSubmit={formSubmit}>
        <FormInput
          required
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          required
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={"google"} onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
