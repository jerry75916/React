import React from "react";
import "./auth_module.scss";
import img_register from "../../assets/register.png";
import Card from "../../Component/card/Card";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section>
      <div className="auth container">
        <Card>
          <div className="form">
            <h2>Register</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input
                type="password"
                placeholder="Please enter your password"
                required
              />
              <input type="password" placeholder="Confirm Password" required />
              <button className="--btn --btn-primary --btn-block">
                Register
              </button>

              <span className="register">
                Already an account?
                <Link to="/Login" style={{ color: "red" }}>
                  Login
                </Link>
              </span>
            </form>
          </div>
        </Card>
        <div className="img">
          <img src={img_register} alt="login" />
        </div>
      </div>
    </section>
  );
};

export default Register;
