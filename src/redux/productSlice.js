import { createSlice } from "@reduxjs/toolkit";
import { dtlProduct } from "../data";

const initialState = {
  products: [],
  detailProduct: dtlProduct,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    setDetail: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      state.detailProduct = product;
    },
  },
});
export const { getProducts, setDetail } = productSlice.actions;
export default productSlice.reducer;
