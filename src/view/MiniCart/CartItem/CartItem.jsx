import PropTypes from 'prop-types';

// components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NumberButton from '../../NumberButton';

// utils
import { formatCurrency } from '../../../service/utils/currencyFormatter';

function CartItem({
  imgSrc, name, options, quantity, totalPrice, onEdit,
}) {
  return (
    <Grid
      container
      columnSpacing={2}
      onClick={onEdit}
      sx={{ cursor: 'pointer', mb: 2 }}
    >
      <Grid item xs={3} mt={1}>
        <img src={imgSrc} alt="" srcSet="" style={{ width: '100%', height: '5vh' }} />
      </Grid>
      <Grid item xs={6}>
        <Grid container rowSpacing={0.5}>
          <Grid item xs={12}>
            <Typography variant="h6">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {
              options.map((option) => (
                <Box key={option.name}>
                  <Typography variant="body2">
                    {option.name}
                  </Typography>
                </Box>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <NumberButton
          size="small"
          variant="contained"
          disableElevation
          sx={{ marginTop: 1 }}
        >
          {quantity}
        </NumberButton>
      </Grid>
      <Grid item xs={2} display="flex" flexDirection="column">
        <Typography variant="body1" color="primary" mt={1} mb="auto">
          {formatCurrency(totalPrice)}
        </Typography>
      </Grid>
    </Grid>
  );
}

CartItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  quantity: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onEdit: PropTypes.func,
};

CartItem.defaultProps = {
  onEdit: () => {},
};

export default CartItem;
