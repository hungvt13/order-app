import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '../../../components/furniture/Container';

// hooks
import useBottombar from '../../../hooks/useBottombar';

// constants
import PAGE_PATH from '../../../service/routes/constants';

const StyledImage = styled('img')({
  height: '30dvh',
  width: 'auto',
  objectFit: 'fill',
});

function PaymentComplete() {
  const navigate = useNavigate();
  const { toActionBar } = useBottombar();

  useEffect(() => {
    toActionBar({
      content: 'Check your orders',
      // change this to order page
      func: () => navigate(PAGE_PATH.MENU_PAGE),
    });
  }, []);

  return (
    <Container justifyContent="center" alignItems="center">
      <StyledImage
        src="https://img.freepik.com/premium-vector/success-payment-hand-illustration-flat-style-approved-money-vector-illustration-isolated-background-successful-pay-sign-business-concept_157943-6857.jpg?w=2000"
        alt="payment-success-image"
        srcSet=""
      />
      <Grid item xs={12}>
        <Typography variant="h5">
          Payment success!
        </Typography>
        <Typography variant="body1">
          Order #: 13
        </Typography>
        <Typography variant="body1">
          Order date: 22/12/2023 10:00 pm
        </Typography>
        <Typography variant="body1">
          Estimated wait time: 30 minutes
        </Typography>
      </Grid>
    </Container>
  );
}

export default PaymentComplete;
