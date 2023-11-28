import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '../../../components/furniture/Container';
import MenuItem from './MenuItem';

// utils
import { formatCurrency } from '../../../service/utils/currencyFormatter';

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
  return (
    <Container>
      {
        !!menuItems.length && menuItems.map((category) => (
          <Grid key={category.id} container>
            <Grid item xs={12}>
              <Typography variant="h5">
                {category.categoryName}
              </Typography>
            </Grid>
            {
              !!category.menuItems.length && category.menuItems.map((item) => (
                <ItemGrid key={item.id} item xs={12}>
                  <MenuItem
                    imgSrc={item.imgSrc}
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
