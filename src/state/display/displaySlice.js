import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backBtn: {
    show: false,
    path: '',
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
  },
});

// Action creators are generated for each case reducer function
export const displayActions = displaySlice.actions;

export default displaySlice.reducer;
