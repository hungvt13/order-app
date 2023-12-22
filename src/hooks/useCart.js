import { useMemo } from 'react';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { cartActions, cartSelector } from '../state/cart';
import { merchantSelector } from '../state/merchant';

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartSelector.cartItems, shallowEqual);
  const miniCartItems = useSelector(cartSelector.miniCartItems, shallowEqual);
  const cartTotalPrice = useSelector(cartSelector.cartTotalPrice, shallowEqual);
  const cartQuantity = useSelector(cartSelector.cartQuantity, shallowEqual);
  const merchantFoodList = useSelector(merchantSelector.merchantFoodList, shallowEqual) || [];

  const foodsList = useMemo(
    () => merchantFoodList
      .map(({ menu_items: menuItems }) => menuItems)
      .flat(1),
    [merchantFoodList],
  );

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

  const updateCart = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const getItemByLocalId = (localId) => cartItems[localId];

  const getAddedFoods = (addedItems, originFoodList = merchantFoodList) => {
    if (addedItems.length === 0 || originFoodList.length === 0) return [];

    // Build a new list by mapping over the keys of addedItems
    const buildList = Object.keys(addedItems).map((localId) => {
      // Extract the item details from addedItems using localId
      const item = { localId, ...addedItems[localId] };

      // Find the corresponding food item in the foods array
      const sourceFood = originFoodList.find((targetFood) => targetFood.id === item.id);

      // Merge item details with source food details
      const addedItem = {
        ...item,
        ...sourceFood,
        // Map over the entries of item.options (group ID and option IDs)
        options: Object.entries(item.options).map(([groupId, optionIds]) => {
          // Find the corresponding group in the source food options
          const sourceGroup = sourceFood.options
            .find((targetGroup) => targetGroup.id.toString() === groupId);

          // Get the option list from the source group
          const sourceOptions = sourceGroup.option_list;

          // Map over optionIds to get the corresponding options from sourceOptions
          const mergedOptions = optionIds
            .map((selectedId) => sourceOptions
              .find((option) => option.id.toString() === selectedId));

          // Flatten the options array
          return mergedOptions;
        }).flat(),
      };

      return addedItem;
    });

    return buildList;
  };

  return {
    addToCart,
    addMiniCart,
    removeCartItems,
    removeMiniCartItems,
    getItemByLocalId,
    updateCart,
    getAddedFoods,
    cartItems,
    cartTotalPrice,
    cartQuantity,
    miniCartItems,
    foodsList,
  };
};

export default useCart;
