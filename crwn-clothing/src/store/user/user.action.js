//此為disptach的內容
import { USER_ACTION_TYPES } from "./user.type";
export const setcurrentUser = (user) => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
};

export const checkUserSession = () => ({
  type: USER_ACTION_TYPES.CHECK_USER_SESSION,
  payload: null,
});

export const googleSignInStart = () => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
  payload: null,
});

export const emailSignInStart = (email, password) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: { email, password },
});

export const signInSuccess = (user) => ({
  type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailed = (error) => ({
  type: USER_ACTION_TYPES.SIGN_IN_FAILED,
  payload: error,
});

export const signUpStart = (email, password, displayName) => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: {
    email,
    password,
    displayName,
  },
});

export const signUpSuccess = (user, additionalDetails) => ({
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  payload: { user, additionalDetails },
});

export const signUpFailed = (error) => ({
  type: USER_ACTION_TYPES.SIGN_UP_FAILED,
  payload: error,
});

export const signOutStart = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_START,
  payload: null,
});

export const signOutSuccess = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
  payload: null,
});

export const signOutFailed = (error) => ({
  type: USER_ACTION_TYPES.SIGN_OUT_FAILED,
  payload: error,
});
