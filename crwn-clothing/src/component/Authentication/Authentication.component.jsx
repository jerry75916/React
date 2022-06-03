import SignUp from "../Sign-up/Sign-up.component";
import "./Authentication.style.scss";
import SignIn from "../sign-in/sign-in.component";
const Authentication = () => {
  return (
    <div>
      <h1>Sign-In Page</h1>
      <div className="signIns">
        <div className="signcontainer">
          <SignIn />
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;
