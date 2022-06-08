import React, { useEffect, useReducer } from "react";

// const initialState = {
//   count: 0,
//   step: 1,
// };
const initvalue = {
  count: 0,
  step: 1,
};

const Reducer = (state, action) => {
  const { count, step } = state;
  const { type, inputStep } = action;
  switch (type) {
    case "tick":
      return { count: state.count + state.step, step: state.step };
    case "step":
      return { ...state, step: action.inputStep };
    default:
      throw new Error(`Error`);
  }
};

const Timer = () => {
  const [state, dispatch] = useReducer(Reducer, initvalue);
  const { count, step } = state;
  useEffect(() => {
    const timeid = setInterval(() => {
      dispatch({
        type: "tick",
      });
    }, 1000);
    return () => {
      clearInterval(timeid);
    };
  }, []);

  return (
    <div>
      <span>Count:{count}</span>
      <input
        type="text"
        value={step}
        onChange={(e) =>
          dispatch({ type: "step", inputStep: Number(e.target.value) })
        }
      />
    </div>
  );
  // const [state, dispatch] = useReducer(timerReducer, initialState);
  // const { count, step } = state;
  // 使用 useReducer 可以將使用到的 state 和 props 從 useEffect 搬到 useReducer 內，
  // 在 useEffect 內只需要描述要進行的動作 dispatch(action)
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     dispatch({
  //       type: "tick",
  //     });
  //   }, 1000);
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []); // dispatch 可以省略不寫
  // return (
  //   <>
  //     <p>Current Count: {count}</p>
  //     <div>
  //       <input
  //         value={step}
  //         onChange={(e) =>
  //           dispatch({ type: "step", step: Number(e.target.value) })
  //         }
  //       />
  //     </div>
  //   </>
  // );
  // };
};
// function timerReducer(state, action) {
//   const { count, step } = state;
//   if (action.type === "tick") {
//     return {
//       count: count + step,
//       step,
//     };
//   } else if (action.type === "step") {
//     return {
//       count: count,
//       step: action.step,
//     };
//   } else {
//     throw new Error();
//   }
// }
export default Timer;
