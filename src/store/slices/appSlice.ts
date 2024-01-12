import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { setDatas } from "./datasSlice";
import { config } from "../../config";

interface AppState {
  isLoading: boolean;
  init: boolean;
  error: Error | null;
}

const initialState: AppState = {
  isLoading: false,
  init: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  "app/fetchAppData",
  async (payload, thunkAPI) => {
    thunkAPI.dispatch(setAppLoading(true));
    const response = await fetch(config.apiBaseUrl, {
      headers: {
        "X-Api-Key": config.apiKey,
      },
    });
    const responseJson = await response.json();
    thunkAPI.dispatch(setDatas(responseJson.data));
    thunkAPI.dispatch(setAppLoading(false));
    thunkAPI.dispatch(setInit(true));
  }
);

export const selectApp = (state: RootState) => state.app;
export const selectDatas = (state: RootState) => state.datas.items;
export const selectCart = (state: RootState) => state.cart;

export const appData = createSelector(
  [selectApp, selectDatas, selectCart],
  (app, datas, cart) => {
    return {
      isLoading: app.isLoading,
      isInit: app.init,
      app,
      datas,
      cart,
    };
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setInit: (state, action: PayloadAction<boolean>) => {
      state.init = action.payload;
    },
  },
});

export const { setAppLoading, setInit } = appSlice.actions;

export default appSlice.reducer;
