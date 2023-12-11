import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {},
  miniCart: {},
  totalPrice: 0,
  quantity: 0,
  errorMess: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = {
        ...state.cart,
        ...action.payload,
      };
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    updateQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    updateCart: (state, action) => {
      state.cart = {
        ...action.payload,
      };
    },
    updateMinicart: (state, action) => {
      state.miniCart = {
        ...action.payload,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
