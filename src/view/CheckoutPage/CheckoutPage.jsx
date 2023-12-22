import {
  useMemo, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '../../components/furniture/Container';
import OrderSummary from './OrderSummary/OrderSummary';
import Payment from './Payment/Payment';

// hooks
import useCart from '../../hooks/useCart';
import useBottombar from '../../hooks/useBottombar';
import useScrollToView from '../../hooks/useScrollToView';
import useIntersection from '../../hooks/useIntersection';

// utils
import { formatCurrency } from '../../service/utils/currencyFormatter';

// constants
import PAGE_PATH from '../../service/routes/constants';

const paymentOptions = [
  {
    id: 1,
    name: 'Cash',
    image_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLSSLYimWczK97iCqx05E9ON0NV-eNe58Xg&usqp=CAU',
  },
  {
    id: 2,
    name: 'Credit card',
    image_src: 'https://img.freepik.com/premium-vector/contactless-payment-by-bank-credit-card-hand-paying-with-cashless-wireless-transfer-pos-terminal-buying-emv-rfid-scanner-flat-graphic-vector-illustration-isolated-white-background_633472-877.jpg?size=626&ext=jpg&ga=GA1.1.1021809173.1702659321&semt=ais',
    disabled: true,
  },
  {
    id: 3,
    name: 'Momo',
    image_src: 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png',
    disabled: true,
  },
];

// eslint-disable-next-line react/prop-types
function SubContent({ totalPrice }) {
  return (
    <Grid container sx={{ padding: 2 }}>
      <Grid item xs={6}>
        <Typography variant="body1">
          Total :
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Typography variant="h6">
          {totalPrice}
        </Typography>
      </Grid>
    </Grid>
  );
}

function CheckoutPage() {
  const navigate = useNavigate();
  const {
    cartItems, getAddedFoods, foodsList, cartTotalPrice,
  } = useCart();
  const { toActionBar } = useBottombar();
  const { addTargetRef, targetRefs } = useIntersection({ threshold: 0.5 });
  const { scrollToItem } = useScrollToView(targetRefs.current);

  const items = useMemo(() => getAddedFoods(cartItems, foodsList), [cartItems, foodsList]);

  const [checkoutInfo, setCheckoutInfo] = useState({
    paymentType: null,
  });

  const [errors, setErrors] = useState({
    paymentType: '',
  });

  const handleChangePayment = (value) => {
    setErrors((prevState) => ({
      ...prevState,
      paymentType: '',
    }));

    setCheckoutInfo((prevState) => ({
      ...prevState,
      paymentType: value,
    }));
  };

  const validate = () => {
    if (checkoutInfo.paymentType === null) {
      setErrors((prevState) => ({
        ...prevState,
        paymentType: 'Select a payment method',
      }));
      return false;
    }

    return true;
  };

  const handlePlaceItem = () => {
    if (!validate()) {
      scrollToItem(0);
      return;
    }

    navigate(PAGE_PATH.PAYMENT_COMPLETE_PAGE);
  };

  useEffect(() => {
    toActionBar({
      content: 'Place Item',
      subcontent: <SubContent totalPrice={formatCurrency(cartTotalPrice)} />,
      func: handlePlaceItem,
    });
  }, [checkoutInfo.paymentType]);

  return (
    <Container rowSpacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5">
          Checkout
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <OrderSummary items={items} />
      </Grid>
      <Grid item xs={12} display="flex">
        <Box flexGrow={1}>
          <Typography variant="body1">
            Subtotal:
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            {formatCurrency(cartTotalPrice)}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Payment
          paymentOptions={paymentOptions}
          type={checkoutInfo.paymentType}
          setType={handleChangePayment}
          addRef={addTargetRef}
          error={errors.paymentType}
        />
      </Grid>
    </Container>
  );
}

export default CheckoutPage;
