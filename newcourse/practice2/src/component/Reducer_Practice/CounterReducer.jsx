import CounterActionTypes from "./actionType";
export const CountReducer = (state, { type, payload }) => {
  switch (type) {
    case CounterActionTypes.PLUS:
      return { ...state, Count: state.Count + 1 };

    case CounterActionTypes.MINUS:
      return { ...state, Count: state.Count - 1 };

    case CounterActionTypes.RESET:
      return { ...state, Count: 0 };

    default:
      return state;
  }
};
