import { legacy_createStore as createStore, combineReducers } from "redux";
// import { counterReducer } from "./conterReducer";
// import { AuthReducer } from "./authReducer";
import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../slice/counterSlice"; //可以亂取但就是要對到對應的Reducer Slice
import authSliceReducer from "../slice/authSlice";
//Reducer

//Combin reducer 可以將Reducer 轉成物件並設perpority，來應對不同的Reducer 條件
// const AllReducers = combineReducers({
//   isLoggIn: AuthReducer,
//   count: counterReducer,
// });
//Create a store
// const store = createStore(
//   AllReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;
