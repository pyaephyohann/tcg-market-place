import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import datasSlice from "./slices/datasSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    datas: datasSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
