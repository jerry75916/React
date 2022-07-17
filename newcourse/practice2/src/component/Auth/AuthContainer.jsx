import React, { useState } from "react";
import Loging from "./Loging";
import Register from "./Register";
import "./AuthContainer.scss";
import Reset from "./Reset";
const AuthContainer = () => {
  const [auth, SetAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });

  const handleRegister = () => {
    SetAuth({
      login: false,
      register: true,
      reset: false,
    });
  };
  const handleReset = () => {
    SetAuth({
      login: false,
      register: false,
      reset: true,
    });
  };
  const handleLogin = () => {
    SetAuth({
      login: true,
      register: false,
      reset: false,
    });
  };
  return (
    <section className="--100vh --flex-center">
      <div className="container box">
        {auth.login && (
          <Loging onRegister={handleRegister} onReset={handleReset} />
        )}
        {auth.register && <Register onLogin={handleLogin} />}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
};

export default AuthContainer;
