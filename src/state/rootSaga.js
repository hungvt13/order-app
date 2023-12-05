import { all, fork } from 'redux-saga/effects';

import { userSaga } from './user';
import { merchantSaga } from './merchant';
import { cartSaga } from './cart';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(merchantSaga),
    fork(cartSaga),
  ]);
}
