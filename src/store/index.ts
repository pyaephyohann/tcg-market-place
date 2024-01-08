import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import datasSlice from "./slices/datasSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    datas: datasSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
