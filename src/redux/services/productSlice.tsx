import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ProductType } from "../../App5";

interface ProductsType {
  products: ProductType[];
}

const initialState: ProductsType = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, { payload }: PayloadAction<ProductType[]>) => {
      console.log(typeof payload);
      state.products.push(...payload);
    },
  },
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;
