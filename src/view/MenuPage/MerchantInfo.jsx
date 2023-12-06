import { memo } from 'react';
import PropTypes from 'prop-types';

// components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Container from '../../components/furniture/Container';

function MerchantInfo({ name, address, hours }) {
  return (
    <Container container>
      <Grid item xs={12} mb={1}>
        <Typography variant="h4">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={12} display="flex" mb={1}>
        <LocationOnIcon fontSize="small" color="primary" sx={{ marginRight: 1 }} />
        <Typography variant="caption">
          {address}
        </Typography>
      </Grid>
      <Grid item xs={12} display="flex">
        <AccessTimeFilledIcon fontSize="small" color="primary" sx={{ marginRight: 1 }} />
        <Typography variant="caption">
          {hours}
        </Typography>
      </Grid>
    </Container>
  );
}

MerchantInfo.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  hours: PropTypes.string,
};

MerchantInfo.defaultProps = {
  name: 'Restaurant name',
  address: 'Restaurant address',
  hours: 'Restaurant hours',
};

export default memo(MerchantInfo);
