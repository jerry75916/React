import React, { useContext } from "react";
import "./Footer.scss";
import styled from "@emotion/styled";
import ThemeContext from "../Context/themeContext";
const Footer = () => {
  const { currentTheme } = useContext(ThemeContext);
  const ConFooter = styled.footer`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${() => {
      return currentTheme.foreground;
    }};
    p {
      color: ${() => {
        return currentTheme.background;
      }};
    }
  `;

  return (
    <div>
      <ConFooter>
        <p>Copy Right &copy;2022</p>
      </ConFooter>
    </div>
  );
};

export default Footer;
