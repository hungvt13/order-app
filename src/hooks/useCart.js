import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { cartActions, cartSelector } from '../state/cart';

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartSelector.cartItems, shallowEqual);
  const miniCartItems = useSelector(cartSelector.miniCartItems, shallowEqual);
  const cartTotalPrice = useSelector(cartSelector.cartTotalPrice, shallowEqual);
  const cartQuantity = useSelector(cartSelector.cartQuantity, shallowEqual);

  const addToCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const addMiniCart = (item) => {
    dispatch(cartActions.updateMinicart(item));
  };

  const removeCartItems = (localIds) => {
    const filteredItems = Object.fromEntries(
      Object.entries(cartItems)
        .filter(([key]) => !localIds.includes(key)),
    );

    dispatch(cartActions.updateCart(filteredItems));
  };

  const removeMiniCartItems = (localIds) => {
    const filteredItems = Object.fromEntries(
      Object.entries(miniCartItems)
        .filter(([key]) => !localIds.includes(key)),
    );

    dispatch(cartActions.updateMinicart(filteredItems));
  };

  return {
    addToCart,
    addMiniCart,
    removeCartItems,
    removeMiniCartItems,
    cartItems,
    cartTotalPrice,
    cartQuantity,
    miniCartItems,
  };
};

export default useCart;
