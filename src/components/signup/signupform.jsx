import React, { useContext, useState } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  createUserWithEmailAndPass,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../forminput/FormInput";
import './signup.scss'
import Button from "../button/Button";
import { UserContext } from "../../contexts/user.context";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmpassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetAll=()=>{
    setFormFields(defaultFormFields);
  }

  const formSubmit = async (e) => {
    e.preventDefault();
    if (
      displayName &&
      email &&
      password &&
      confirmpassword &&
      password === confirmpassword
    ) {
      const { user } = await createUserWithEmailAndPass(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetAll();
    }
  };

  return (
    <div className="sign-up-container">
        <h2>Don't have an Account?</h2>
      <span>Sign Up with Email and Password</span>
      <form action="" onSubmit={formSubmit}>
        <FormInput
          required
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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
        <FormInput
          required
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmpassword"
          value={confirmpassword}
        />

        <Button type="submit" >Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
