import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";

// import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import persistStore from "redux-persist/lib/persistStore";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root.saga";
// const loggerMiddleWare = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
// };
const sagaMilldeWare = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //user 都來自firebase所以放入不永久保存
};
const persisedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  process.env.NODE_ENV === "development" && logger,
  sagaMilldeWare,
  // thunk,
].filter(Boolean); //filter boolean 的目的為true 就回傳設定logger,false 則回[]
const composeEnhance =
  compose(
    process.env.NODE_ENV !== "production" &&
      window &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) || compose;
const composedEnhancers = composeEnhance(applyMiddleware(...middleware));
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware:middleware
// });

//宣告store 使用的reducer
export const store = createStore(persisedReducer, undefined, composedEnhancers);
sagaMilldeWare.run(rootSaga);
export const persistor = persistStore(store);
