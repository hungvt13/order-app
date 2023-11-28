import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';

import { merchantActions } from './merchantSlice';

import * as merchantApi from '../../service/api/merchantApi';

function* fetchMerchant(action) {
  try {
    const { id } = action.payload;
    // call API
    const { data } = yield call(merchantApi.getMerchantInfo, id);

    // set data into state
    yield put(merchantActions.fetchMerchantComplete({ data }));
  } catch (e) {
    yield put(merchantActions.fetchMerchantError({ errorMess: e.message }));
  }
}

export default function* sagas() {
  yield takeLatest(merchantActions.fetchMerchantStart, fetchMerchant);
}
