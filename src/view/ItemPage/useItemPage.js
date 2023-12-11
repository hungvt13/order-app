import {
  useState, useEffect, useLayoutEffect,
} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// custom hooks
import useBackBtn from '../../hooks/useBackBtn';
import useBottombar from '../../hooks/useBottombar';
import useScrollToView from '../../hooks/useScrollToView';
import useCart from '../../hooks/useCart';

// state
import { merchantSelector } from '../../state/merchant';

// constants
import PAGE_PATH from '../../service/routes/constants';

// utils
import { formatCurrency } from '../../service/utils/currencyFormatter';

const useItemPage = () => {
  const { showBackBtn } = useBackBtn();
  const { toActionBar } = useBottombar();
  const { itemRefs, scrollToItem } = useScrollToView();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  const itemId = searchParams.get('itemId');

  const [selected, setSelected] = useState({
    id: null,
    categoryId: null,
    quantity: 1,
    options: {},
    required: [],
    totalPrice: 0,
    errors: [],
  });

  const foodList = useSelector(merchantSelector.merchantFoodList, shallowEqual);
  const currentCategory = foodList?.find(({ id }) => id.toString() === categoryId);
  const currentItem = currentCategory?.menu_items?.find(({ id }) => id.toString() === itemId);

  const getOptionList = (data, selectedOptions) => {
    const populatedData = data.map((item) => ({
      value: item.id,
      label: item.name,
      checked: selectedOptions?.includes(item.id.toString()) || false,
      endLabel: (item.price !== 0) && `+ ${formatCurrency(item.price)}`,
    }));

    return populatedData;
  };

  const getLabel = (name, maxPick) => {
    if (maxPick === 1) {
      return `${name} (Choose ${maxPick})`;
    }

    return `${name} (Max : ${maxPick})`;
  };

  const getSelectedValue = (selectedValues, value, maxPick) => {
    // switch to another option if client can only pick 1
    if (selectedValues.includes(value) && maxPick === 1) {
      return selectedValues;
    }

    if (!selectedValues.includes(value) && maxPick === 1) {
      return [value];
    }

    // remove if already selected
    if (selectedValues.includes(value)) {
      return selectedValues.filter((item) => item !== value);
    }

    if (selectedValues.length + 1 <= maxPick) {
      return [...selectedValues, value];
    }

    return selectedValues;
  };

  const handleChangeOptions = (id, value, maxPick) => {
    setSelected((prevState) => {
      const currentValues = [...prevState.options[id]];
      const finalValue = getSelectedValue(currentValues, value, maxPick);

      return ({
        ...prevState,
        options: {
          ...prevState.options,
          [id]: finalValue,
        },
        errors: prevState.errors.filter((errorId) => errorId !== id),
      });
    });
  };

  const handleChangeQuantity = (num) => {
    setSelected((prevState) => {
      const currentQuantity = prevState.quantity;

      if (currentQuantity + num === 0) return prevState;

      if (currentQuantity + num > 10) return prevState;

      return ({
        ...prevState,
        quantity: prevState.quantity + num,
      });
    });
  };

  const getTotalPrice = () => {
    if (!!currentItem === false) return 0;

    let sum = currentItem.price;

    currentItem.options.forEach((optionType) => {
      const typeId = optionType.id;
      const options = optionType.option_list;
      const selectedOptions = selected.options[typeId];

      if (selectedOptions) {
        options.forEach((item) => {
          if (selectedOptions.includes(item.id.toString())) {
            sum += item.price;
          }
        });
      }
    });

    return sum * selected.quantity;
  };

  const validate = () => {
    const errors = selected.required
      .filter((optionId) => selected.options[optionId].length === 0);

    setSelected((prevState) => ({
      ...prevState,
      errors,
    }));

    scrollToItem(errors.at(0));

    return errors.length === 0;
  };

  const addItemToCart = () => {
    const isValid = validate();

    if (!isValid) return;

    const id = uuidv4();
    const item = {
      id: selected.id,
      localId: id,
      categoryId,
      options: selected.options,
      quantity: selected.quantity,
      totalPrice: selected.totalPrice,
    };

    addToCart({ [id]: item });

    navigate(PAGE_PATH.MENU_PAGE);
  };

  useEffect(() => {
    if (currentItem) {
      setSelected((prevState) => ({
        ...prevState,
        id: currentItem.id,
        options: currentItem?.options
          ?.reduce((acc, option) => { acc[option.id] = []; return acc; }, {}),
        required: currentItem?.options
          ?.filter((option) => option.required)
          ?.map((option) => option.id),
      }));
    }
  }, [currentItem]);

  useEffect(() => {
    const totalPrice = getTotalPrice();

    setSelected((prevState) => ({
      ...prevState,
      totalPrice,
    }));
  }, [selected.quantity, selected.options]);

  useEffect(() => {
    const str = `Add to cart - ${formatCurrency(selected.totalPrice)}`;
    toActionBar({ content: str, func: addItemToCart });
  }, [selected.totalPrice]);

  useLayoutEffect(() => {
    showBackBtn(PAGE_PATH.MENU_PAGE);
    toActionBar({ content: 'Add to cart' });
  }, []);

  return {
    itemRefs,
    selected,
    setSelected,
    currentItem,
    getOptionList,
    getLabel,
    handleChangeOptions,
    handleChangeQuantity,
  };
};

export default useItemPage;
