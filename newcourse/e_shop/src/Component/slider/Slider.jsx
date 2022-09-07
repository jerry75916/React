import React, { useState } from "react";

import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { sliderData } from "./Slider-data";
import "./Slider.scss";
const Slider = () => {
  const [currentSlider, setcurrentSlider] = useState(0);
  return (
    <div className="slider">
      <AiOutlineLeftCircle className="arrow prev" />
      <AiOutlineRightCircle className="arrow next" />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlider ? `slide current` : `slide`}
          >
            {index === currentSlider && (
              <>
                <img src={image} alt="slide"></img>
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <a href="#product" className=" --btn --btn-primary">
                    Shop Now
                  </a>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
