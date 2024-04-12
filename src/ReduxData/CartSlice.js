import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increment(state, action) {
      let data = state.find((item) => item.id === action.payload);
      if (data) {
        data.quantity += 1;
      }
    },
    decrement(state, action) {
      let data = state.find((item) => item.id === action.payload);
      if (data && data.quantity > 1) {
        data.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
