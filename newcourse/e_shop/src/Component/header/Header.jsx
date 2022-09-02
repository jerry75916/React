import React, { useState } from "react";
import "./Header_Module.scss";
import { Link, NavLink } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { BiMenuAltRight } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
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
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
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
              <NavLink to="/register" className={activLink}>
                Register
              </NavLink>
              <NavLink to="/order-history" className={activLink}>
                My Orders
              </NavLink>
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
  );
};

export default Header;
