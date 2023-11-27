import {
  takeLatest,
  call,
  put,
  delay,
} from 'redux-saga/effects';

import { userActions } from './userSlice';

import * as userApi from '../../service/api/userApi';

function* fetchUser(action) {
  try {
    // simulate fetching time
    yield delay(500);

    const { id } = action.payload;
    // call API
    const { data } = yield call(userApi.getUserInfo, id);

    // set data into state
    yield put(userActions.fetchUserComplete({ data }));
  } catch (e) {
    yield put(userActions.fetchUserError({ errorMess: e.message }));
  }
}

export default function* sagas() {
  yield takeLatest(userActions.fetchUserStart, fetchUser);
}
