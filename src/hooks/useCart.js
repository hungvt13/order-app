import { useSelector, useDispatch } from 'react-redux';
import { cartActions, cartSelector } from '../state/cart';

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartSelector.cartItems);
  const cartTotalPrice = useSelector(cartSelector.cartTotalPrice);
  const cartQuantity = useSelector(cartSelector.cartQuantity);

  const addToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  return {
    addToCart,
    cartItems,
    cartTotalPrice,
    cartQuantity,
  };
};

export default useCart;
