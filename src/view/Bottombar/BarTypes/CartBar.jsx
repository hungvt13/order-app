import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Button from '../../../components/furniture/Button';

// custom hook
import useCart from '../../../hooks/useCart';

// utils
import { formatCurrency } from '../../../service/utils/currencyFormatter';

// constants
import PAGE_PATH from '../../../service/routes/constants';

function CartBar() {
  const navigate = useNavigate();
  const { cartQuantity, cartTotalPrice } = useCart();

  const handleCheckOut = (e) => {
    navigate(PAGE_PATH.CHECKOUT_PAGE);
  };

  return (
    <>
      <Badge badgeContent={cartQuantity} color="error" sx={{ marginRight: 2 }}>
        <ShoppingCartIcon />
      </Badge>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Total:
        {' '}
        {formatCurrency(cartTotalPrice)}
      </Typography>
      <Button
        variant="contained"
        color="inherit"
        size="small"
        onClick={handleCheckOut}
        disableElevation
      >
        Check out
      </Button>
    </>
  );
}

export default CartBar;
