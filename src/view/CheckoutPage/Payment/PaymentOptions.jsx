import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// components
import Grid from '@mui/material/Grid';

const StyledPaymentImg = styled('img')(({ theme }) => ({
  height: '50px',
  width: 'auto',
  display: 'block',
  marginBottom: theme.spacing(2.6),
  '&:last-child': {
    marginBottom: 0,
  },
}));

function PaymentOptions({ label, imgSrc }) {
  return (
    <Grid container>
      <Grid item xs={6} display="flex" alignItems="center">
        {label}
      </Grid>
      <Grid item xs={6}>
        <StyledPaymentImg src={imgSrc} />
      </Grid>
    </Grid>
  );
}

PaymentOptions.propTypes = {
  label: PropTypes.string,
  imgSrc: PropTypes.string,
};

PaymentOptions.defaultProps = {
  label: '',
  imgSrc: '',
};

export default PaymentOptions;
