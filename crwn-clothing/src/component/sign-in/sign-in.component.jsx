import { useState } from "react";
import {
  signInWithGooglePopup,
  SignInAuthUserWithEmailAndPassWord,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.componet";

import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const loggoogleuser = async () => {
    dispatch(googleSignInStart());
  };

  // async () => {
  //   await signInWithGooglePopup();
  // };

  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formfields, setformfields] = useState(defaultFormFields);
  const { email, password } = formfields;
  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      // await SignInAuthUserWithEmailAndPassWord(email, password);
      // setcurrentUser(user);
      resetForm();
    } catch (e) {
      if (e.code === "auth/wrong-password") {
        alert("UserName or Password is not correct!!");
        return;
      } else if (e.code === "auth/user-not-found") {
        alert("UserName is not found!!");
        return;
      }
    }
  };

  const handChange = (event) => {
    const { name, value } = event.target;

    setformfields({ ...formfields, [name]: value }); //{a,b,a:1} can return {a:1,b}
  };
  const resetForm = () => {
    setformfields(defaultFormFields);
  };
  return (
    <div>
      <h2>Already have a account?</h2>
      <span>Sign up with eMail or Password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button childern="SIGN IN" type="submit" />
          <Button
            type="button"
            childern="Google SignIN"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={loggoogleuser}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
