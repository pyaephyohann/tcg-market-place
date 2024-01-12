import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  item: any;
  price: number;
  quantity: number;
  subtotal: number;
}

interface CartState {
  isLoading: boolean;
  items: CartItem[];
  error: Error | null;
}

const initialState: CartState = {
  isLoading: false,
  items: [],
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
    updateCart: (state, action: PayloadAction<any>) => {
      state.items = state.items.map((item: any) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    emptyCart: (state) => {
      state.items = [];
    },
    quantityIncrease: (state, action: PayloadAction<any>) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          const newQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity,
            subtotal: item.price * newQuantity,
          };
        }
        return item;
      });
    },
    quantityDecrease: (state, action: PayloadAction<any>) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity,
            subtotal: item.price * newQuantity,
          };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCart,
  emptyCart,
  quantityIncrease,
  quantityDecrease,
} = cartSlice.actions;

export default cartSlice.reducer;
