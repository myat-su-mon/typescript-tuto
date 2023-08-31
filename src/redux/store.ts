import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./services/counterSlice";
import productSlice from "./services/productSlice";
import { productsApi } from "./api/productApi";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    products: productSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
