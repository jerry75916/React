import React, { useState } from "react";
import Img_login from "../../assets/login.svg";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const Loging = ({
  onRegister,
  onReset,
  onShowPassword = false,
  ontogglePassword,
}) => {
  return (
    <div className="main-container --flex-center ">
      <div className="img-container">
        <img src={Img_login} alt="login" />
      </div>
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Login</h2>

          <input type="text" className="--width-100" placeholder="UserName" />
          <div>
            <input
              type={onShowPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
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
          <button className="--btn --btn-primary --btn-block">Login</button>
          <a href="#" className="--text-sm" onClick={onReset}>
            Forget Password
          </a>
          <span className="--text-sm --block">
            Don't have account?{" "}
            <a href="#" className="--text-sm" onClick={onRegister}>
              Register
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Loging;
