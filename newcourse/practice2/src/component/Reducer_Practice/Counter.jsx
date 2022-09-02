import React, { useState, useReducer } from "react";
import { act } from "react-dom/test-utils";
import CountReducer from "./CounterReducer";
import CounterActionTypes from "./actionType";
const Counter = () => {
  const [state, dispatch] = useReducer(CountReducer, { Count: 0 });
  const plus = () => {
    dispatch({
      type: CounterActionTypes.PLUS,
      payload: "1",
    });

    // setCount(Count + 1);
  };
  const minus = () => {
    dispatch({
      type: CounterActionTypes.MINUS,
      payload: "2",
    });
    // setCount(Count - 1);
  };
  const reset = () => {
    // setCount(0);
    dispatch({
      type: CounterActionTypes.RESET,
      payload: "3",
    });
  };
  return (
    <div>
      Count:{state.Count}
      <br></br>
      <button onClick={plus} className="--btn-danger">
        {" "}
        +{" "}
      </button>
      <button onClick={reset} className=" --btn-primary">
        {" "}
        Reset{" "}
      </button>
      <button onClick={minus} className=" --btn-grey">
        {" "}
        -{" "}
      </button>
    </div>
  );
};

export default Counter;
