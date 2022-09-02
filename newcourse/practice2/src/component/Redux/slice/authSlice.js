import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggin: true,
  },
  reducers: {
    Toggle_Auth: (state) => {
      state.isLoggin = !state.isLoggin;
    },
  },
});
const {actions,reducer}=AuthSlice
export const { Toggle_Auth } = actions;
export default reducer;
