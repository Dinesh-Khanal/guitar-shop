import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({ ...action.payload, count: 1 });
    },
    clearCart: (state) => {
      state.items = [];
    },
    increment: (state, action) => {
      state.items = state.items.map((itm) =>
        itm.id === action.payload ? { ...itm, count: itm.count + 1 } : itm
      );
    },
    decrement: (state, action) => {
      state.items = state.items.map((itm) => {
        if (itm.id === action.payload) {
          if (itm.count > 1) return { ...itm, count: itm.count - 1 };
        }
        return itm;
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((itm) => itm.id !== action.payload);
    },
  },
});
export const { addToCart, clearCart, increment, decrement, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
