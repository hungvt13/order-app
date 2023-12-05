import { createSlice } from '@reduxjs/toolkit';

import { BOTTOM_BAR_TYPE } from './constant';

const initialState = {
  backBtn: {
    show: false,
    path: '',
  },
  bottombar: {
    type: BOTTOM_BAR_TYPE.CART,
    content: '',
    func: () => {},
  },
  topbar: {
    height: 0,
  },
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    toggleBackBtn: (state, action) => {
      state.backBtn.show = action.payload.show;
      state.backBtn.path = action.payload.path;
    },
    resetBackBtn: (state) => {
      state.backBtn = initialState.backBtn;
    },
    changeBottombar: (state, action) => {
      state.bottombar.type = action.payload.type;
      state.bottombar.content = action.payload.content;
      state.bottombar.func = action.payload.func;
    },
    changeBottombarContent: (state, action) => {
      state.bottombar.content = action.payload.content;
    },
    changeTottombar: (state, action) => {
      state.topbar.height = action.payload.height;
    },
  },
});

export const displayActions = displaySlice.actions;

export default displaySlice.reducer;
