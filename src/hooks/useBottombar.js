import { useSelector, useDispatch } from 'react-redux';

import { displayActions, displaySelector, BOTTOM_BAR_TYPE } from '../state/display';

const useBottombar = () => {
  const dispatch = useDispatch();
  const barType = useSelector(displaySelector.barType);

  const toActionBar = ({ content = '', func = () => {} }) => {
    dispatch(displayActions.changeBottombar({
      type: BOTTOM_BAR_TYPE.ACTION,
      content,
      func,
    }));
  };

  const toCartBar = ({ content = '', func = () => {} }) => {
    dispatch(displayActions.changeBottombar({
      type: BOTTOM_BAR_TYPE.CART,
      content,
      func,
    }));
  };

  const changeContent = ({ content = '' }) => {
    dispatch(displayActions.changeBottombarContent({ content }));
  };

  return {
    barType,
    toActionBar,
    toCartBar,
    changeContent,
  };
};

export default useBottombar;
