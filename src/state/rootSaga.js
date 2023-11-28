import { all, fork } from 'redux-saga/effects';

import { userSaga } from './user';
import { merchantSaga } from './merchant';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(merchantSaga),
  ]);
}
