import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { displayActions, displaySelector } from '../state/display';

const useBackBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backBtnConfig = useSelector(displaySelector.backBtnConfig);
  const { show, path } = backBtnConfig;

  const showBackBtn = (targetPath) => {
    dispatch(displayActions.toggleBackBtn({ show: true, path: targetPath }));
  };

  const hideBackBtn = () => {
    dispatch(displayActions.resetBackBtn());
  };

  const navigateTo = () => {
    navigate({
      pathname: path,
    });
  };

  return {
    show,
    path,
    showBackBtn,
    hideBackBtn,
    navigateTo,
  };
};

export default useBackBtn;
