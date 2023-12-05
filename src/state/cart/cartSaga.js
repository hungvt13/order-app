import {
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';

import { cartActions } from './cartSlice';
import { cartTotalPrice, cartQuantity } from './cartSelector';

function* updateTotalPrice(action) {
  try {
    const data = action.payload;
    const stateTotalPrice = yield select(cartTotalPrice);
    const stateQuantity = yield select(cartQuantity);
    const itemDetail = Object.values(data);
    const itemTotalPrice = itemDetail.reduce((total, item) => total + item.totalPrice, 0);
    const itemQuantity = itemDetail.reduce((total, item) => total + item.quantity, 0);

    // set final price into state
    yield put(cartActions.updateTotalPrice(stateTotalPrice + itemTotalPrice));
    yield put(cartActions.updateQuantity(stateQuantity + itemQuantity));
  } catch (e) {
    console.log(e);
    // yield put(userActions.fetchUserError({ errorMess: e.message }));
  }
}

export default function* sagas() {
  yield takeLatest(cartActions.addToCart, updateTotalPrice);
}
