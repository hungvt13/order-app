/* eslint-disable react/prop-types */
import {
  orange,
} from '@mui/material/colors';

// components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RadioGroup from '../../../components/corner/RadioGroup';
import PaymentOptions from './PaymentOptions';

function Payment({
  paymentOptions, type, setType, addRef, error,
}) {
  const getPaymentList = () => {
    const data = paymentOptions.map((item) => ({
      id: item.id,
      label: <PaymentOptions label={item.name} imgSrc={item.image_src} />,
      value: item.id,
      disabled: item.disabled || false,
      sx: {
        backgroundColor: type === `${item.id}` ? orange[50] : 'inherit',
        outline: `1px solid ${orange[100]}`,
        ...(item.disabled ? { filter: 'grayscale(100%)', opacity: 0.5 } : {}),
        borderRadius: 1,
        height: '80px',
        margin: 0,
        marginBottom: 2,
        '&:last-child': {
          marginBottom: 0,
        },
        '&:hover': {
          backgroundColor: orange[50],
        },
      },
    }));

    return data;
  };

  return (
    <Grid container ref={addRef}>
      <Grid item xs={12}>
        <Typography variant="h6" as="span" sx={{ marginRight: 1 }}>
          Payment
        </Typography>
        {
        error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
        )
      }
      </Grid>
      <Grid item xs={12}>
        <RadioGroup
          data={getPaymentList()}
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
      </Grid>
    </Grid>
  );
}

export default Payment;
