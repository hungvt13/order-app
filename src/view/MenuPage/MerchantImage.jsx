import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// component
import Container from '../../components/furniture/Container';

// asset
import RestaurantPlaceholder from '../../asset/restaurant_placeholder.svg';

const StyledImage = styled('img')(({ theme }) => ({
  height: '20dvh',
  width: '100%',
  objectFit: 'cover',
  borderRadius: theme.spacing(1),
}));

function MerchantImage({ imgSrc }) {
  return (
    <Container>
      <StyledImage
        src={imgSrc}
        alt="merchant restaurant"
      />
    </Container>
  );
}

MerchantImage.propTypes = {
  imgSrc: PropTypes.string,
};

MerchantImage.defaultProps = {
  imgSrc: RestaurantPlaceholder,
};

export default MerchantImage;
