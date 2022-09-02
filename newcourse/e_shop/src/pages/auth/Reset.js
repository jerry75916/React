import React from "react";
import "./auth_module.scss";
import img_Reset from "../../assets/forgot.png";
import { Link } from "react-router-dom";

import Card from "../../Component/card/Card";
const Reset = () => {
  return (
    <section>
      <div className="auth container">
        <div>
          <img src={img_Reset} alt="login" height={300} />
        </div>
        <Card>
          <div className="form">
            <h2>Reset Password</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <button className="--btn --btn-primary --btn-block">
                Reset Password
              </button>
              <span className=" --flex-between --p">
                <Link to="/Login">-Login</Link>
                <Link to="/Register">-Register</Link>
              </span>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Reset;
