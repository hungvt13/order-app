import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import Topbar from '../Topbar';
import { merchantActions } from '../../state/merchant';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(merchantActions.fetchMerchantStart({ id: 13 }));
  }, []);

  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
}

export default App;
