import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Toggle_Auth } from "./slice/authSlice";
import { Add, Minus, Reset, Add5 } from "./slice/counterSlice";
// import { auth_action } from "./action/auth_action";
// import { counterAction } from "./action/counter_action";
// import {
//   handle_reset,
//   handle_minus,
//   handle_add,
//   handle_AddNumber,
//   toggleAuth,
// } from "./action/action";
const Counter = () => {
  //Combin reducer
  //init
  const count = useSelector((state) => state.counter.count); //找count Reducer
  const isLoggin = useSelector((state) => state.auth.isLoggin); //找isloggin Reducer

  const dispatch = useDispatch();
  // const handle_add = () => {
  //   dispatch({ type: counterAction.Add });
  // };
  // const handle_minus = () => {
  //   dispatch({ type: counterAction.Minus });
  // };
  // const handle_reset = () => {
  //   dispatch({ type: counterAction.Reset });
  // };
  // const handle_AddNumber = (amount) => {
  //   dispatch({ type: counterAction.Add5, payload: amount });
  // };
  // const toggleAuth = () => {
  //   dispatch({ type: auth_action.LoginStat });
  // };
  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all --width-500px">
        <button
          className=" --btn --btn-danger"
          onClick={() => dispatch(Toggle_Auth())}
        >
          {isLoggin ? `Log Out` : `Log in`}
        </button>
        <hr />
        {isLoggin ? (
          <>
            <h3>React Counter App</h3>
            <h1>Count:{count}</h1>
            <div className="buttons --flex-center">
              <button
                className=" --btn --btn-danger"
                onClick={() => dispatch(Minus())}
              >
                Subtract
              </button>
              <button className=" --btn" onClick={() => dispatch(Reset())}>
                Reset
              </button>
              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(Add())}
              >
                Add
              </button>
              <button
                className=" --btn --btn-primary"
                onClick={() => dispatch(Add5(5))}
              >
                Add 5
              </button>
            </div>
          </>
        ) : (
          <>
            <h3>Please click loggin</h3>
          </>
        )}
      </div>
    </section>
  );
};
export default Counter;
