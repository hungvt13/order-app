import { useSelector, useDispatch } from 'react-redux';

import { displayActions, displaySelector, BOTTOM_BAR_TYPE } from '../state/display';

const useBottombar = () => {
  const dispatch = useDispatch();
  const barConfigs = useSelector(displaySelector.barConfigs);
  const barType = barConfigs.type;
  const barFunc = barConfigs.func;

  const toActionBar = ({ content = '', func = () => {} }) => {
    dispatch(displayActions.changeBottombar({
      type: BOTTOM_BAR_TYPE.ACTION,
      content,
      func,
    }));
  };

  const toCartBar = ({
    content = '',
    func = () => {},
  }) => {
    dispatch(displayActions.changeBottombar({
      type: BOTTOM_BAR_TYPE.CART,
      content,
      func,
    }));
  };

  const changeContent = ({ content = '' }) => {
    dispatch(displayActions.changeBottombarContent({ content }));
  };

  const toggleMiniCart = ({ show = true }) => {
    dispatch(displayActions.toggleMinicart({ show }));
  };

  return {
    barType,
    barFunc,
    toActionBar,
    toCartBar,
    changeContent,
    toggleMiniCart,
  };
};

export default useBottombar;
