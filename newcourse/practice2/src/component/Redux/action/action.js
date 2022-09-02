import { counterAction } from "./counter_action";
import { auth_action } from "./auth_action";
export const handle_add = () => {
  return { type: counterAction.Add };
};
export const handle_minus = () => {
  return { type: counterAction.Minus };
};
export const handle_reset = () => {
  return { type: counterAction.Reset };
};
export const handle_AddNumber = (amount) => {
  return { type: counterAction.Add5, payload: amount };
};
export const toggleAuth = () => {
  return { type: auth_action.LoginStat };
};
