import React, { useState } from "react";
const UseState = () => {
  const [count, setCount] = useState(0);
  const handleClickAdd = () => {
    setCount(count + 1);
  };
  const handleClickReset = () => {
    setCount(0);
  };
  const handleClickSubtract = () => {
    setCount(count - 1);
  };

  let color = "#444";
  if (count > 0) {
    color = "blue";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "#444";
  }

  return (
    <div>
      <scction className="--flex-center --100vh --bg-primary">
        <div className="container  --bg-light --p2 --center-all --m2">
          <h3>Regular Html Page</h3>
          <h1 style={{ color: color }}>Count:{count}</h1>
          <div className="buttons --flex-center">
            <button
              className="--btn --btn-danger"
              onClick={handleClickSubtract}
            >
              Subtract
            </button>
            <button className="--btn" onClick={handleClickReset}>
              Reset
            </button>
            <button className="--btn --btn-primary" onClick={handleClickAdd}>
              Add
            </button>
          </div>
        </div>
      </scction>
    </div>
  );
};

export default UseState;
