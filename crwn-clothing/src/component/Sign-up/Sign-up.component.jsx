import { useState } from "react";
import {
  createAuthUserWithEmailAndPassWord,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.componet";
import Button, { BUTTON_TYPE_CLASSES } from "../buttons/button.component";
import { signUpStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const dispatch = useDispatch();
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const [formfields, setformfields] = useState(defaultFormFields);
  const { displayName, email, password, confirmpassword } = formfields;
  const handlesubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      alert("Password do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      // const { user } = await createAuthUserWithEmailAndPassWord(
      //   email,
      //   password
      // );

      // await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert("Has another user created");
      } else {
        console.log(e);
      }
      return;
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
      <h2>Don't have a account？</h2>
      <span>Sign up with eMail or Password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Comfirm Passward"
          type="password"
          required
          onChange={handChange}
          name="confirmpassword"
          value={confirmpassword}
        />
        <Button childern="SIGN UP" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
