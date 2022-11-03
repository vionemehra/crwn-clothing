
import { useState } from "react";
import FormInput from '../form-input/form-input.components';
import Button from "../button/button.components";

import { createUserDocumentFromAuth, signInWithGoogleRedirect, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormFields  = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email,  password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGoogleRedirect();
    await createUserDocumentFromAuth(user)
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response)
      resetFormFields();
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password': 
          alert("password does not match"); 
          break;
        case 'auth/user-not-found': 
          alert("User not found"); 
          break;
        default: console.log(error);
      }
    }


   
  }

  const handleChange = async(event) => {
    event.preventDefault();
    const { name, value } = event.target; 
    setFormFields({...formFields, [name]: value})

  }


    return (
      <div className="sign-in-container">
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>

          <FormInput
            label="Email"
            inputOptions = {{
              type: "email",
              required: true,
              onChange: handleChange,
              name: "email",
              value: email
            }}
          />
          <FormInput
            label="Password"
            inputOptions = {{
              type: "password",
              required: true,
              onChange: handleChange,
              name: "password",
              value: password
            }}
          />
          <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
          </div>
          
        </form>
      </div>
  )
}
export default SignInForm;