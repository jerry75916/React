import React from "react";
import { Outlet, Routes, Route } from "react-router-dom";
import Info from "./Info";
const About = () => {
  return (
    <div className=" --center-all">
      <h1>About Page</h1>
      <p>
        Welecome to the <b>About</b> page
      </p>
      <Routes>
        <Route path="Info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default About;
