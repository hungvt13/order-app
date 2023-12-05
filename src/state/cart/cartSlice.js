import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
  totalPrice: 0,
  quantity: 0,
  errorMess: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = {
        ...state.items,
        ...action.payload,
      };
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    updateQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
