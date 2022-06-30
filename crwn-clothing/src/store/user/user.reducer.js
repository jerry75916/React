import { USER_ACTION_TYPES } from "./user.type";
const INITIAL_STATE = { currentUser: null, isLoading: false, error: null };

//此為Dispatch 的Reducer判定式
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state, //useReducer 的return 是回傳state內修改後的物件, 也就是const [state,dispatch]中的state物件被修改後的樣子
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state, //useReducer 的return 是回傳state內修改後的物件, 也就是const [state,dispatch]中的state物件被修改後的樣子
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
