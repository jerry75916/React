import { USER_ACTION_TYPES } from "./user.type";
import { call, put, all, takeLatest } from "redux-saga/effects";
import {
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signUpSuccess,
  signUpFailed,
} from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  SignInAuthUserWithEmailAndPassWord,
  SignOutFun,
  createAuthUserWithEmailAndPassWord,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    put(signInFailed(error));
  }
}
export function* signInFromEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      SignInAuthUserWithEmailAndPassWord,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    put(signInFailed(error));
  }
}

export function* signOutHandler() {
  try {
    yield call(SignOutFun);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(error);
  }
}
export function* signUpHandler({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassWord,
      email,
      password
    );

    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}
export function* onSignUpUser() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpHandler);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUpHandler);
}
export function* onSignOutUser() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutHandler);
}

export function* onSigninFromEmail() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInFromEmail);
}

export function* onGoogleSigninStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCHeckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signInAfterSignUpHandler({
  payload: { user, additionalDetails },
}) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* usersagas() {
  yield all([
    call(onCHeckUserSession),
    call(onGoogleSigninStart),
    call(onSigninFromEmail),
    call(onSignOutUser),
    call(onSignUpUser),
    call(onSignUpSuccess),
  ]); //註冊user_session
}
