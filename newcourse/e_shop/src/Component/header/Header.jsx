import React, { useState, useEffect } from "react";
import "./Header_Module.scss";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes, FaUserCircle } from "react-icons/fa";

import { auth } from "../../pages/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Component_logo = (
  <div className="logo">
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);
const Cart = (
  <span className="cart">
    <Link to="/cart">
      <GiShoppingCart size={25} />
      <p>0</p>
    </Link>
  </span>
);
const activLink = ({ isActive }) => {
  return isActive ? `active` : ``;
};
const Header = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggin, setIsLoggin] = useState(false);
  const [displayName, setdisplayName] = useState("");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const LogOutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successful!!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setdisplayName(user.displayName);
        console.log(user);
        setIsLoggin(true);
      } else {
        // User is signed out
        setIsLoggin(false);
      }
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <header>
        <div className="header">
          {Component_logo}
          <nav className={showMenu ? `show-nav` : `hide-nav`}>
            <div
              className={
                showMenu ? `nav-wrapper show-nav-wrapper` : `nav-wrapper`
              }
              onClick={hideMenu}
            ></div>
            <ul>
              {showMenu ? (
                <li className="logo-mobile">
                  <Link to="/">{Component_logo}</Link>
                  <FaTimes size={20} onClick={hideMenu} className="x" />
                </li>
              ) : (
                ``
              )}
              <li>
                <NavLink className={activLink} to="/">
                  Home
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/contact" className={activLink}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="header-right">
              <span className="links">
                <NavLink to="/login" className={activLink}>
                  Login
                </NavLink>
                <a href="#home" style={{ color: "#ff7722" }}>
                  <FaUserCircle size={16} />
                  Hi, {displayName}
                </a>

                <NavLink to="/register" className={activLink}>
                  Register
                </NavLink>
                <NavLink to="/order-history" className={activLink}>
                  My Orders
                </NavLink>
                {isLoggin && (
                  <Link to="/" onClick={LogOutUser}>
                    LogOut
                  </Link>
                )}
              </span>
              {Cart}
            </div>
          </nav>
          <div className="menu-icon">
            {Cart}
            <BiMenuAltRight size={30} onClick={toggleMenu} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
