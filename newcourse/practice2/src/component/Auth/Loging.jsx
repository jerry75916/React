import React, { useState } from "react";
import Img_login from "../../assets/login.svg";

const Loging = ({ onRegister, onReset }) => {
  return (
    <div className="main-container --flex-center ">
      <div className="img-container">
        <img src={Img_login} alt="login" />
      </div>
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Login</h2>

          <input type="text" className="--width-100" placeholder="UserName" />
          <input
            type="password"
            className="--width-100"
            placeholder="Password"
          />
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
