import { counterAction } from "../action/counter_action";
export const counterReducer = (state = 5, action) => {
  const { type, payload } = action;
  switch (type) {
    case counterAction.Add:
      return state + 1;
    case counterAction.Minus:
      return state - 1;
    case counterAction.Reset:
      return (state = 0);
    case counterAction.Add5:
      return state + payload;
    default:
      return state;
  }
};
