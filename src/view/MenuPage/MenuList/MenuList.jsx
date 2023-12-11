import { memo, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '../../../components/furniture/Container';
import MenuItem from './MenuItem';

// utils
import { formatCurrency } from '../../../service/utils/currencyFormatter';

// constant
import PAGE_PATH from '../../../service/routes/constants';

// custom hook
import useCart from '../../../hooks/useCart';
import useBottombar from '../../../hooks/useBottombar';

const ItemGrid = styled(Grid)(({ theme }) => ({
  borderBottom: `0.5px solid ${theme.palette.grey[300]}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '&:nth-last-of-type(1)': {
    borderBottom: 'none',
    paddingBottom: 0,
    marginBottom: theme.spacing(2),
  },
}));

function MenuList({ menuItems, addRef }) {
  const navigate = useNavigate();
  const { cartItems, addMiniCart } = useCart();
  const { toggleMiniCart } = useBottombar();

  /**
    * key: {
    *   id: key,
    *   localIds : [],
    *   totalQuantity: 0
    * }
    */
  const [addedItems, setAddedItems] = useState({});

  const toItemPage = (categoryId, itemId) => {
    navigate({
      pathname: PAGE_PATH.ITEM_PAGE,
      search: `?categoryId=${categoryId}&itemId=${itemId}`,
    });
  };

  const handleOnClick = (e, categoryId, itemId) => {
    e.preventDefault();
    e.stopPropagation();

    if (addedItems[itemId]) {
      const toMiniCartItems = Object.fromEntries(
        Object.entries(cartItems)
          .filter(([key]) => addedItems[itemId].localIds.includes(key)),
      );

      addMiniCart(toMiniCartItems);
      toggleMiniCart({ show: true });
    } else {
      toItemPage(categoryId, itemId);
    }
  };

  useEffect(() => {
    if (cartItems.length !== 0) {
      const populateQuantity = Object.values(cartItems).reduce((acc, item) => {
        acc[item.id] = acc[item.id] ? {
          ...acc[item.id],
          localIds: [...acc[item.id].localIds, item.localId],
          totalQuantity: acc[item.id].totalQuantity + item.quantity,
        } : {
          id: item.id,
          localIds: [item.localId],
          totalQuantity: item.quantity,
        };

        return acc;
      }, {});

      setAddedItems(populateQuantity);
    }
  }, [cartItems]);

  return (
    <Container>
      {
        !!menuItems.length && menuItems.map((category) => (
          <Grid key={category.id} container>
            <Grid item xs={12} ref={addRef}>
              <Typography variant="h5">
                {category.category_name}
              </Typography>
            </Grid>
            {
              !!category.menu_items.length && category.menu_items.map((item) => (
                <ItemGrid
                  key={item.id}
                  item
                  xs={12}
                  onClick={(e) => handleOnClick(e, category.id, item.id)}
                >
                  <MenuItem
                    imgSrc={item.image_source}
                    name={item.name}
                    description={item.description}
                    price={formatCurrency(item.price)}
                    cartQuantity={addedItems[item.id]?.totalQuantity}
                  />
                </ItemGrid>
              ))
            }
          </Grid>
        ))
      }
    </Container>
  );
}

MenuList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  menuItems: PropTypes.array,
  addRef: PropTypes.func,
};

MenuList.defaultProps = {
  menuItems: [],
  addRef: () => {},
};

export default memo(MenuList);
