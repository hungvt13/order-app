import React from 'react';

// component
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CartBar from './BarTypes/CartBar';
import ActionBtn from './BarTypes/ActionBtn';

// constants
import { BOTTOM_BAR_TYPE } from '../../state/display';

// hook
import useBottombar from '../../hooks/useBottombar';

const barConfigs = {
  [BOTTOM_BAR_TYPE.CART]: {
    component: (props) => <CartBar {...props} />,
    color: 'primary',
    disableGutters: false,
  },
  [BOTTOM_BAR_TYPE.ACTION]: {
    component: (props) => <ActionBtn {...props} />,
    color: 'default',
    disableGutters: true,
  },
};

function Bottombar() {
  const { barType, barFunc } = useBottombar();

  const barContent = barConfigs[barType];

  const BarComponent = barContent.component;
  const barColor = barContent.color;
  const { disableGutters } = barContent;

  return (
    <AppBar
      position="sticky"
      component="footer"
      sx={{ top: 'auto', bottom: 0, zIndex: 100 }}
      color={barColor}
      onClick={barFunc}
    >
      <Toolbar disableGutters={disableGutters}>
        <BarComponent />
      </Toolbar>
    </AppBar>
  );
}

export default Bottombar;
