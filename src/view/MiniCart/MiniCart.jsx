import React, { useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

// components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Container from '../../components/furniture/Container';
import Button from '../../components/furniture/Button';
import CartItem from './CartItem/CartItem';

// state
import { displaySelector } from '../../state/display';

// custom hook
import useCart from '../../hooks/useCart';
import useBottombar from '../../hooks/useBottombar';
import useEdit from '../../hooks/useEdit';

// utils
import { formatCurrency } from '../../service/utils/currencyFormatter';

function MiniCart() {
  const { miniCartItems, foodsList, getAddedFoods } = useCart();
  const { toggleMiniCart } = useBottombar();
  const { toItemPage } = useEdit();

  const miniCartShow = useSelector(displaySelector.miniCartShow, shallowEqual);

  const items = useMemo(() => getAddedFoods(miniCartItems, foodsList), [foodsList, miniCartItems]);
  const currentItem = items.at(0) || {};

  const toggleDrawer = (ishow) => {
    toggleMiniCart({ show: ishow });
  };

  const handleEdit = (categoryId, itemId, localId) => {
    toggleDrawer(false);
    toItemPage(categoryId, itemId, localId);
  };

  const handleAddNew = (categoryId, itemId) => {
    toggleDrawer(false);
    toItemPage(categoryId, itemId);
  };

  return (
    <Drawer
      anchor="bottom"
      open={miniCartShow}
      sx={{ width: '430px' }}
      PaperProps={{ style: { position: 'absolute', overflow: 'hidden' } }}
      onClose={() => toggleDrawer(false)}
      ModalProps={{
        container: document.getElementById('app-container'),
        style: { position: 'absolute', overflow: 'hidden' },
      }}
    >
      <Box
        onKeyDown={() => toggleDrawer(false)}
        position="relative"
      >
        <Container position="relative">
          <Grid item xs={8} display="flex" justifyContent="start">
            <Typography variant="h5">
              {currentItem.name}
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign="end">
            <Typography variant="body">
              Base price
            </Typography>
            <Typography variant="body1" color="primary">
              {formatCurrency(currentItem.price)}
            </Typography>
          </Grid>
        </Container>
        <Divider />
        <Container>
          {
            !!items.length && items.map((item) => (
              <CartItem
                onEdit={() => handleEdit(item.categoryId, item.id, item.localId)}
                key={item.localId}
                imgSrc={item.image_source}
                name={item.name}
                options={item.options}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            ))
          }
          <Grid item xs={12} position="sticky" sx={{ bottom: 0, left: 0 }}>
            <Button
              fullWidth
              sx={{ height: '100%' }}
              variant="contained"
              onClick={() => handleAddNew(currentItem.categoryId, currentItem.id)}
            >
              Add another
            </Button>
          </Grid>
        </Container>
      </Box>
    </Drawer>
  );
}

export default MiniCart;
