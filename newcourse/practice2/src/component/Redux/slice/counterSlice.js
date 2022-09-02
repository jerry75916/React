import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    Add: (state) => {
      state.count += 1;
    },
    Minus: (state) => {
      state.count -= 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
    Add5: (state, action) => {
      const { payload } = action;
      state.count += payload;
    },
  },
});
const { actions, reducer } = countSlice;
export const { Add, Minus, Reset, Add5 } = actions;
export default reducer;
