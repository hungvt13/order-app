import { useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';

// components
import Grid from '@mui/material/Grid';
import MerchantImage from './MerchantImage';
import MerchantInfo from './MerchantInfo';
import MenuList from './MenuList/MenuList';
import MenuSearch from './MenuSearch';

// state
import { merchantSelector } from '../../state/merchant';

// custom hooks
import useBackBtn from '../../hooks/useBackBtn';

function MenuPage() {
  const useBackBtnHook = useBackBtn();

  const merchantData = useSelector(merchantSelector.merchantData);

  useLayoutEffect(() => {
    useBackBtnHook.hideBackBtn();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <MerchantImage
          imgSrc={merchantData.store_image}
        />
      </Grid>
      <Grid item xs={12}>
        <MerchantInfo
          name={merchantData.name}
          address={merchantData.address}
          hours={merchantData.hours}
        />
      </Grid>
      <Grid item xs={12}>
        <MenuSearch />
      </Grid>
      <Grid item xs={12}>
        <MenuList menuItems={merchantData.menu_list} />
      </Grid>
    </Grid>
  );
}

export default MenuPage;
