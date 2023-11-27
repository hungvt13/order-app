import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from '../constants';

const initialState = {
  userData: {},
  userFetchStatus: FETCH_STATUS.IDLE,
  errorMess: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userFetchStatus = FETCH_STATUS.RUNNING;
    },
    fetchUserComplete: (state, action) => {
      state.userFetchStatus = FETCH_STATUS.COMPLETE;
      state.userData = action.payload.data;
    },
    fetchUserError: (state, action) => {
      state.userFetchStatus = FETCH_STATUS.ERROR;
      state.errorMess = action.payload.errorMess;
    },
  },
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

export default userSlice.reducer;
