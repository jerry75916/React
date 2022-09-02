import React, { useState, useEffect } from "react";
import Img_register from "../../assets/register.svg";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { FaCheck } from "react-icons/fa";
const Register = ({ onLogin, onShowPassword=false, ontogglePassword }) => {
  const [showIndicator, setshowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLeng, setPassLeng] = useState(false);
  const [passComplete, setPassComplete] = useState(false);

  const PasswordTipVisible = () => {
    setshowIndicator(true);
  };
  const passwordChangeHandler = (e) => {
    setPass(e.target.value);
  };

  useEffect(() => {
    // check Lower and Uppercase
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }
    // Check For Numbers
    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }

    // Check For Special char
    if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }
    if (pass.length >= 8) {
      setPassLeng(true);
    } else {
      setPassLeng(false);
    }

    if (passLetter && passNumber && passLeng && passChar) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [pass]);

  return (
    <div className="main-container --flex-center ">
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input type="text" className="--width-100" placeholder="UserName" />
          <input type="email" className="--width-100" placeholder="Email" />
          <div>
            <input
              type={onShowPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              onChange={passwordChangeHandler}
              onFocus={PasswordTipVisible}
              value={pass}
            />
            {onShowPassword ? (
              <AiOutlineEye
                className="ctrl_password"
                onClick={ontogglePassword}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="ctrl_password"
                onClick={ontogglePassword}
              />
            )}
          </div>
          <button
            disabled={!passComplete}
            className={
              passComplete
                ? "--btn --btn-primary --btn-block"
                : "--btn --btn-primary --btn-block btn-disabled"
            }
            onClick={() => {
              alert(pass);
            }}
          >
            Register
          </button>
          <span className="--text-sm --block">
            Have an account?{" "}
            <a href="#" className="--text-sm" onClick={onLogin}>
              Login
            </a>
          </span>{" "}
          <div className={showIndicator ? "show_indicator" : "hide_indicator"}>
            <ul className="--list-style-none --card --text-sm --bg-grey --p">
              <p className=" --text-sm">Password Strength Indicator</p>
              <li className={passLetter ? "pass_green" : "pass_red"}>
                <span className="--align-center">
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp;Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? "pass_green" : "pass_red"}>
                <span className="--align-center">
                  <GoPrimitiveDot />
                  &nbsp;Numbers(0-9)
                </span>
              </li>
              <li className={passChar ? "pass_green" : "pass_red"}>
                <span className="--align-center">
                  <GoPrimitiveDot />
                  &nbsp;Special Character(!@#$%^&*)
                </span>
              </li>
              <li className={passLeng ? "pass_green" : "pass_red"}>
                <span className="--align-center">
                  <GoPrimitiveDot />
                  &nbsp;At Least 8 Character
                </span>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="img-container">
        <img src={Img_register} alt="register" />
      </div>
    </div>
  );
};

export default Register;
