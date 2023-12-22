import { useSelector, useDispatch } from 'react-redux';

import { displayActions, displaySelector, BOTTOM_BAR_TYPE } from '../state/display';

const useBottombar = () => {
  const dispatch = useDispatch();
  const barConfigs = useSelector(displaySelector.barConfigs);
  const barType = barConfigs.type;
  const barFunc = barConfigs.func;

  const toActionBar = ({ content = '', subcontent = '', func = () => {} }) => {
    dispatch(displayActions.changeBottombar({
      type: BOTTOM_BAR_TYPE.ACTION,
      content,
      subcontent,
      func,
    }));
  };

  const toCartBar = ({
    content = '',
    subcontent = '',
    func = () => {},
  }) => {
    dispatch(displayActions.changeBottombar({
      type: BOTTOM_BAR_TYPE.CART,
      content,
      subcontent,
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
