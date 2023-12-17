import {
  useState, useEffect, useLayoutEffect, useMemo,
} from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import cloneDeep from 'lodash/cloneDeep';

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

const DEFAULT_SELECTED_DATA = {
  id: null,
  categoryId: null,
  quantity: 1,
  options: {},
  required: [],
  totalPrice: 0,
  errors: [],
  process: {
    initItemConfig: false,
    initItemTotal: false,
  },
};

const useItemPage = () => {
  const { showBackBtn } = useBackBtn();
  const { toActionBar } = useBottombar();
  const { itemRefs, scrollToItem, scrollToTop } = useScrollToView();
  const {
    addToCart, updateCart, getItemByLocalId, removeCartItems,
  } = useCart();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  const itemId = searchParams.get('itemId');
  const localId = searchParams.get('localId');

  const [selected, setSelected] = useState(cloneDeep(DEFAULT_SELECTED_DATA));

  const [isRemoveDialog, toggleRemoveDialog] = useState(false);

  const foodList = useSelector(merchantSelector.merchantFoodList, shallowEqual);
  const currentCategory = foodList?.find(({ id }) => id.toString() === categoryId);
  const currentItem = currentCategory?.menu_items?.find(({ id }) => id.toString() === itemId);
  const isEdit = localId !== null;
  const currentCartItem = useMemo(() => (isEdit
    ? getItemByLocalId(localId) : null), [isEdit, localId]);

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
    if (maxPick === 1) {
      // switch to another option if client can only pick 1
      return selectedValues.includes(value) ? selectedValues : [value];
    }

    // remove if already selected
    if (selectedValues.includes(value)) {
      return selectedValues.filter((item) => item !== value);
    }

    // check if the maximum number of selections is reached
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

      if (currentQuantity + num === 0) {
        if (isEdit) {
          toggleRemoveDialog(true);
        }
        return prevState;
      }

      if (currentQuantity + num > 10) return prevState;

      return ({
        ...prevState,
        quantity: prevState.quantity + num,
      });
    });
  };

  const getTotalPrice = () => {
    if (!!currentItem === false) return 0;

    // sum of base price and all selected options
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
      localId: selected.localId || id,
      categoryId,
      options: selected.options,
      quantity: selected.quantity,
      totalPrice: selected.totalPrice,
    };

    if (isEdit) {
      updateCart({ [item.localId]: item });
    } else {
      addToCart({ [id]: item });
    }

    navigate(PAGE_PATH.MENU_PAGE);
  };

  const handleRemoveClose = () => {
    toggleRemoveDialog(false);
  };

  const handleRemoveItem = () => {
    removeCartItems([localId]);
    navigate(PAGE_PATH.MENU_PAGE);
  };

  useEffect(() => {
    if (currentItem) {
      setSelected((prevState) => ({
        ...prevState,
        id: currentItem.id,
        categoryId,
        options: currentItem?.options
          ?.reduce((acc, option) => { acc[option.id] = []; return acc; }, {}),
        required: currentItem?.options
          ?.filter((option) => option.required)
          ?.map((option) => option.id),
        process: {
          ...prevState.process,
          initItemConfig: true,
        },
      }));
    }
  }, [currentItem]);

  useEffect(() => {
    const totalPrice = getTotalPrice();

    setSelected((prevState) => ({
      ...prevState,
      process: {
        ...prevState.process,
        initItemTotal: true,
      },
      totalPrice,
    }));

    const blankItem = `Add to cart - ${formatCurrency(totalPrice)}`;
    const editItem = `Update item - ${formatCurrency(totalPrice)}`;

    toActionBar({ content: isEdit ? editItem : blankItem, func: addItemToCart });
  }, [selected.quantity, selected.options, selected.totalPrice, isEdit]);

  useEffect(() => {
    // for merging data in edit
    if (currentCartItem
      && Object.keys(currentCartItem).length !== 0
      && selected.process.initItemTotal
      && selected.process.initItemConfig) {
      setSelected((prevState) => ({
        ...prevState,
        ...cloneDeep(currentCartItem),
      }));
    }
  }, [currentCartItem, selected.process.initItemTotal, selected.process.initItemConfig]);

  useLayoutEffect(() => {
    scrollToTop();
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
    localId,
    isEdit,
    isRemoveDialog,
    handleRemoveClose,
    handleRemoveItem,
  };
};

export default useItemPage;
