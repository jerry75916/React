//此為disptach的內容
import { USER_ACTION_TYPES } from "./user.type";
export const setcurrentUser = (user) => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
};
