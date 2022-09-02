import React ,{useContext}from "react";
import "./Hero.scss";
import imgPhone from "../../assets/phone.svg";
import styled from "@emotion/styled";
import ThemeContext from "../Context/themeContext";
const Hero = () => {
  const { currentTheme} = useContext(ThemeContext);
  const Section_Component = styled.section`
    background-color: ${() => {
      return currentTheme.background;
    }};
    padding-top: 12rem;
  `;
  const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    row-gap: 1rem;
    column-gap: 1rem;
    .hero-text > * {
      margin-bottom: 1rem;
      color: ${() => {
        return currentTheme.foreground;
      }};
    }
  `;
  const Buttons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .--btn-p {
      background: ${() => {
        return currentTheme.foreground;
      }};
      color: ${() => {
        return currentTheme.background;
      }};
    }
  `;
  return (
    <Section_Component>
      <Container>
        <div className="hero-text">
          <h1>Visit Vila Shop Landing Page.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos ratione recusandae repellendus dicta, repudiandae
            possimus, molestiae sunt natus laboriosam, quaerat quas corporis?
            Nisi veritatis ex, quam molestias ad dolores nam?
          </p>
          <Buttons>
            <button className=" --btn --btn-p">Learn More</button>
            <button className=" --btn --btn-danger">Sign Up</button>
          </Buttons>
        </div>
        <div className="--text-center">
          <img src={imgPhone} alt="phone" width={250}></img>
        </div>
      </Container>
    </Section_Component>
  );
};

export default Hero;
