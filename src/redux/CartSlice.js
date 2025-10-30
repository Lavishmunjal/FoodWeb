import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.qty += 1; // directly mutate since Immer handles immutability
      } else {
        state.items.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
    incrementQty: (state, action) => {
  const item = state.items.find((i) => i.id === action.payload);
  if (item) item.qty += 1;
},
decrementQty: (state, action) => {
  const item = state.items.find((i) => i.id === action.payload);
  if (item && item.qty > 1) item.qty -= 1;
},
  },
});

export const { addItem, removeItem, clearCart, incrementQty, decrementQty  } = cartSlice.actions;
export default cartSlice.reducer;
