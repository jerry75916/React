import { auth_action } from "../action/auth_action";
export const AuthReducer = (state = true, action) => {
  const { type, payload } = action;

  switch (type) {
    case auth_action.LoginStat:
      return !state;

    default:
      return state;
  }
};
