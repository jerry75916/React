import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminOnlyRoute, {
  AdminOnlyLink,
} from "./Component/AdminOnlyRoute/AdminOnlyRoute";

//component
import {
  Header,
  Footer,
  AdminHome,
  ViewProducts,
  AddProduct,
  Orders,
} from "./Component/index";

//pages
import { Home, Contact, Login, Register, Reset, Admin } from "./pages/";

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
          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          >
            <Route index element={<AdminHome />}></Route>
            <Route path="home" element={<AdminHome />}></Route>
            <Route path="all-products" element={<ViewProducts />}></Route>
            <Route path="add-product/:id" element={<AddProduct />}></Route>
            <Route path="orders" element={<Orders />}></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
