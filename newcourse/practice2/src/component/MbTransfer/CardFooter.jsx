import React from "react";
import styled from "styled-components";
export const CardFooter = ({ val }) => {
  // STEP 1：inputValue 是使用者輸入的數值，暫時先設成 30
  let inputValue = val;
  // STEP 2：定義 criteria 物件
  let criteria;

  // STEP 3：根據 inputValue 改變要顯示的內容和背景色
  if (!inputValue) {
    criteria = {
      title: "---",
      backgroundColor: "#d3d8e2",
    };
  } else if (inputValue < 15) {
    criteria = {
      title: "SLOW",
      backgroundColor: "#ee362d",
    };
  } else if (inputValue < 40) {
    criteria = {
      title: "GOOD",
      backgroundColor: "#1b82f1",
    };
  } else if (inputValue >= 40) {
    criteria = {
      title: "FAST",
      backgroundColor: "#13d569",
    };
  }
  return (
    <button
      className="card-footer"
      style={{
        backgroundColor: criteria.backgroundColor,
      }}
    >
      {criteria.title}
    </button>
  );
};
export default CardFooter;
