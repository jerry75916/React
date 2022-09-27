import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import ProductReducer from "./slice/productSlice"
const rootReducer = combineReducers({
  auth: authReducer,
  Product:ProductReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
