import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

// custom hook
import useCart from '../../../hooks/useCart';

// utils
import { formatCurrency } from '../../../service/utils/currencyFormatter';

function CartBar() {
  const { cartQuantity, cartTotalPrice } = useCart();

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Total:
        {' '}
        {formatCurrency(cartTotalPrice)}
      </Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
      >
        <Badge badgeContent={cartQuantity} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </>
  );
}

export default CartBar;
