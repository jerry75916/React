import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className=" --bg-primary --p2  --flex-center">
      <nav className="navs">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "Link_Active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "Link_Active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/Blogs"
          className={({ isActive }) => (isActive ? "Link_Active" : "")}
        >
          Blogs
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
