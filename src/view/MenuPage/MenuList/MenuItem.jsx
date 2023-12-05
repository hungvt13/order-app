import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '../../../components/furniture/IconButton';

import FoodPlaceholder from '../../../asset/food_placeholder.svg';

const StyledImage = styled('img')({
  height: 'auto',
  width: '100%',
});

function MenuItem({
  imgSrc, name, description, price,
}) {
  return (
    <Grid container sx={{ position: 'relative' }}>
      <Grid item xs={3} pr={2} display="grid" alignContent="center">
        <StyledImage
          src={imgSrc || FoodPlaceholder}
          alt=""
          srcSet=""
        />
      </Grid>
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}
              variant="caption"
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" color="primary">
              {price}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ position: 'absolute', bottom: -15, right: 0 }}>
            <IconButton size="large" color="primary">
              <AddCircleIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

MenuItem.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  imgSrc: FoodPlaceholder,
};

export default MenuItem;
