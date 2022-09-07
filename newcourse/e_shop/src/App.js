import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//component
import { Header, Footer } from "./Component/index";

//pages
import { Home, Contact, Login, Register, Reset } from "./pages/";
 
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
