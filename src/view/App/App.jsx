import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Topbar from '../Topbar';
import BackButton from '../BackButton';
import Bottombar from '../Bottombar';
import MiniCart from '../MiniCart';

// state
import { merchantActions } from '../../state/merchant';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(merchantActions.fetchMerchantStart({ id: 13 }));
  }, []);

  return (
    <Grid
      id="app-container"
      container
      position="relative"
      flexDirection="column"
      sx={{ backgroundColor: '#f5f5f5', height: '100%' }}
    >
      <Topbar />
      <BackButton />
      <Box flexGrow={1}>
        <Outlet />
      </Box>
      <MiniCart />
      <Bottombar />
    </Grid>
  );
}

export default App;
