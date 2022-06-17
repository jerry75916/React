import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
// import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
const loggerMiddleWare = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
};
const middleware = [logger];
const composedEnhancers = compose(applyMiddleware(...middleware));
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware:middleware
// });

//宣告store 使用的reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
