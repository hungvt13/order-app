import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Button from '../../../components/furniture/Button';

// custom hook
import useCart from '../../../hooks/useCart';

// utils
import { formatCurrency } from '../../../service/utils/currencyFormatter';

function CartBar() {
  const { cartQuantity, cartTotalPrice } = useCart();

  const handleCheckOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
