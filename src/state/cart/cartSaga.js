import {
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';

import { cartActions } from './cartSlice';
import { cartItems } from './cartSelector';

function* updateTotalInfo() {
  try {
    const stateCartItems = yield select(cartItems);
    const { totalPrice, quantity } = Object.values(stateCartItems)
      .reduce((acc, cartItem) => {
        acc.totalPrice += cartItem.totalPrice;
        acc.quantity += cartItem.quantity;

        return acc;
      }, { totalPrice: 0, quantity: 0 });

    // set final price and quantity into state
    yield put(cartActions.updateTotalPrice(totalPrice));
    yield put(cartActions.updateQuantity(quantity));
  } catch (e) {
    console.log(e);
  }
}

export default function* sagas() {
  yield takeLatest(cartActions.addToCart, updateTotalInfo);
}
