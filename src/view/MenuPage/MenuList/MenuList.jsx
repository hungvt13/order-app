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

const ItemGrid = styled(Grid)(({ theme }) => ({
  borderBottom: `0.5px solid ${theme.palette.grey[300]}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '&:nth-last-child(1)': {
    borderBottom: 'none',
    paddingBottom: 0,
    marginBottom: theme.spacing(2),
  },
}));

function MenuList({ menuItems }) {
  const navigate = useNavigate();

  const onClickItem = (categoryId, itemId) => {
    navigate({
      pathname: PAGE_PATH.ITEM_PAGE,
      search: `?categoryId=${categoryId}&itemId=${itemId}`,
    });
  };

  return (
    <Container>
      {
        !!menuItems.length && menuItems.map((category) => (
          <Grid key={category.id} container>
            <Grid item xs={12}>
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
                  onClick={() => onClickItem(category.id, item.id)}
                >
                  <MenuItem
                    imgSrc={item.image_source}
                    name={item.name}
                    description={item.description}
                    price={formatCurrency(item.price)}
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
};

MenuList.defaultProps = {
  menuItems: [],
};

export default MenuList;
