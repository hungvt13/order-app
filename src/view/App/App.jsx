import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import Grid from '@mui/material/Grid';
import Topbar from '../Topbar';
import BackButton from '../BackButton';
import { merchantActions } from '../../state/merchant';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(merchantActions.fetchMerchantStart({ id: 13 }));
  }, []);

  return (
    <Grid position="relative">
      <BackButton />
      <Topbar />
      <Outlet />
    </Grid>
  );
}

export default App;
