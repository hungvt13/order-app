import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from '../constants';

const initialState = {
  merchantData: {},
  merchantFetchStatus: FETCH_STATUS.IDLE,
  errorMess: '',
};

const merchantSlice = createSlice({
  name: 'merchant',
  initialState,
  reducers: {
    fetchMerchantStart: (state) => {
      state.merchantFetchStatus = FETCH_STATUS.RUNNING;
    },
    fetchMerchantComplete: (state, action) => {
      state.merchantFetchStatus = FETCH_STATUS.COMPLETE;
      state.merchantData = action.payload.data;
    },
    fetchMerchantError: (state, action) => {
      state.merchantFetchStatus = FETCH_STATUS.ERROR;
      state.errorMess = action.payload.errorMess;
    },
  },
});

// Action creators are generated for each case reducer function
export const merchantActions = merchantSlice.actions;

export default merchantSlice.reducer;
