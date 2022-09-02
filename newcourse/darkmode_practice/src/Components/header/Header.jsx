import React, { useContext } from "react";
import "./Header.scss";
import { GiShoppingCart } from "react-icons/gi";
import { FaMoon, FaSun } from "react-icons/fa";
import styled from "@emotion/styled";
import ThemeContext from "../Context/themeContext";

const Header = () => {
  const { currentTheme, switchBallStat,ToggleTheme} = useContext(ThemeContext);
  const Con_Header = styled.header`
    position: relative;
    background-color: ${() => {
      return currentTheme.foreground;
    }};
    width: 100%;
    border-bottom: 1px solid #000;
    nav a {
      color: ${() => {
        return currentTheme.background;
      }};
    }
    nav li {
      list-style: none;
      margin: 0 10px;
      font-size: 16px;
    }
  `;
  const BtnToggle = styled.span`
    width: 45px;
    height: 22.5px;
    background-color: #000;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    transform: scale(1.5);
    cursor: pointer;
  `;
  return (
    <>
      <Con_Header>
        <div className="Shade close_Modal">
          <div className="Modal">
            <div className="Modal_header">
              <p className="Modal_Title">This is title</p>
              <span className="Modal_cross">&times;</span>
            </div>
            <div className="Modal_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quisquam magnam omnis, esse hic nobis temporibus sed numquam
              excepturi ea blanditiis reiciendis cupiditate suscipit ipsum,
              mollitia placeat? Harum, accusamus quae.
            </div>
            <div className="Modal_footer">
              <button className=" --btn --btn-danger">Start</button>
              <button className=" --btn --btn-primary">Stop</button>
            </div>
          </div>
        </div>
        <div className="container --flex-between">
          <div className="logo">
            <GiShoppingCart size={50} color="orange" />
            <span className="span_logo">VilaShop</span>
          </div>
          <nav>
            <ul className="--flex-between">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
          <div>
            <BtnToggle onClick={ToggleTheme}>
              <FaMoon color="pink" size={16} />
              <FaSun color="yellow" size={16} />
              <div className={switchBallStat ? "ball right" : "ball"}></div>
            </BtnToggle>
          </div>
        </div>
      </Con_Header>
    </>
  );
};

export default Header;
