import React from "react";
import "./auth_module.scss";
import img_Login from "../../assets/login.png";
import { Link } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import Card from "../../Component/card/Card";
const Login = () => {
  return (
    <section>
      <div className="auth container">
        <div className="img">
          <img src={img_Login} alt="login" />
        </div>
        <Card>
          <div className="form">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input
                type="password"
                placeholder="Please enter your password"
                required
              />
              <button className="--btn --btn-primary --btn-block">Login</button>
              <div className="links">
                <Link to="/Reset" style={{ color: "red" }}>
                  Reset Password
                </Link>
              </div>
              <p> --or--</p>
              <button className="--btn --btn-danger --btn-block">
                <IoLogoGoogle size={20} /> Login with Google
              </button>
              <span className="register">
                Don't have an account?
                <Link to="/Register" style={{ color: "red" }}>
                  Register
                </Link>
              </span>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Login;
