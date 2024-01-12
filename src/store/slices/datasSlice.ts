import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DatasState {
  isLoading: boolean;
  items: any;
  error: Error | null;
}

const initialState: DatasState = {
  isLoading: false,
  items: [],
  error: null,
};

export const datasSlice = createSlice({
  name: "datas",
  initialState,
  reducers: {
    setDatas: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },
  },
});

export const { setDatas } = datasSlice.actions;

export default datasSlice.reducer;
