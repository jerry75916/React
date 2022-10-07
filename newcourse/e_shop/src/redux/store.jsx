import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import ProductReducer from "./slice/productSlice"
import FilterReducer from "./slice/filterSlice"
const rootReducer = combineReducers({
  auth: authReducer,
  Product:ProductReducer,
  filter:FilterReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false //避免值出來是物件不是string
  }),
});

export default store;
