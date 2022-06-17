import { USER_ACTION_TYPES } from "./user.type";
const INITIAL_STATE = { currentUser: null };

//此為Dispatch 的Reducer判定式
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, //useReducer 的return 是回傳state內修改後的物件, 也就是const [state,dispatch]中的state物件被修改後的樣子
        currentUser: payload,
      };

    default:
      return state;
  }
};
