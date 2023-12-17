import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
import { merchantSelector } from '../../state/merchant';

// custom hook
import useCart from '../../hooks/useCart';
import useBottombar from '../../hooks/useBottombar';

// utils
import { formatCurrency } from '../../service/utils/currencyFormatter';

// constants
import PAGE_PATH from '../../service/routes/constants';

function MiniCart() {
  const navigate = useNavigate();
  const { miniCartItems } = useCart();
  const { toggleMiniCart } = useBottombar();
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});

  const miniCartShow = useSelector(displaySelector.miniCartShow, shallowEqual);
  const merchantFoodList = useSelector(merchantSelector.merchantFoodList, shallowEqual) || [];
  const foods = useMemo(
    () => merchantFoodList
      .map(({ menu_items: menuItems }) => menuItems)
      .flat(1),
    [merchantFoodList],
  );

  const toggleDrawer = (ishow) => {
    toggleMiniCart({ show: ishow });
  };

  const toItemPage = (categoryId, itemId, localId) => {
    let searchStr = `?categoryId=${categoryId}&itemId=${itemId}`;

    if (localId) {
      searchStr += `&localId=${localId}`;
    }

    navigate({
      pathname: PAGE_PATH.ITEM_PAGE,
      search: searchStr,
    });
  };

  const handleEdit = (categoryId, itemId, localId) => {
    toggleDrawer(false);
    toItemPage(categoryId, itemId, localId);
  };

  const handleAddNew = (categoryId, itemId) => {
    toggleDrawer(false);
    toItemPage(categoryId, itemId);
  };

  useEffect(() => {
    // Check if miniCartItems and foods arrays are not empty
    if (miniCartItems.length !== 0 && foods.length !== 0) {
      // Build a new list by mapping over the keys of miniCartItems
      const buildList = Object.keys(miniCartItems).map((localId) => {
        // Extract the item details from miniCartItems using localId
        const item = { localId, ...miniCartItems[localId] };

        // Find the corresponding food item in the foods array
        const sourceFood = foods.find((targetFood) => targetFood.id === item.id);

        // Merge item details with source food details
        const addedItem = {
          ...item,
          ...sourceFood,
          // Map over the entries of item.options (group ID and option IDs)
          options: Object.entries(item.options).map(([groupId, optionIds]) => {
            // Find the corresponding group in the source food options
            const sourceGroup = sourceFood.options
              .find((targetGroup) => targetGroup.id.toString() === groupId);

            // Get the option list from the source group
            const sourceOptions = sourceGroup.option_list;

            // Map over optionIds to get the corresponding options from sourceOptions
            const mergedOptions = optionIds
              .map((selectedId) => sourceOptions
                .find((option) => option.id.toString() === selectedId));

            // Flatten the options array
            return mergedOptions;
          }).flat(),
        };

        // Return the merged item
        return addedItem;
      });

      // Set the state with the built list
      setItems(buildList);
    }
  }, [foods, miniCartItems]);

  useEffect(() => {
    if (Object.keys(items).length) {
      setCurrentItem(items.at(0));
    }
  }, [items]);

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
