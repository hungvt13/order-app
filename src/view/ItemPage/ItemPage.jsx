import { styled } from '@mui/material/styles';

// components
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Container from '../../components/furniture/Container';
import CheckboxGroup from '../../components/corner/CheckboxGroup';
import IconButton from '../../components/furniture/IconButton';

// utils
import { formatCurrency } from '../../service/utils/currencyFormatter';

// custom hooks
import useItemPage from './useItemPage';

// assets
import FoodPlaceholder from '../../asset/food_placeholder.svg';

const StyledImage = styled('img')({
  height: '30dvh',
  width: '100%',
  objectFit: 'fill',
});

function ItemPage() {
  const {
    itemRefs,
    selected,
    currentItem,
    getOptionList,
    getLabel,
    handleChangeOptions,
    handleChangeQuantity,
  } = useItemPage();

  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledImage
          src={currentItem?.image_source || FoodPlaceholder}
          alt=""
        />
      </Grid>
      <Grid item xs={12}>
        <Container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h4">
              {currentItem?.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              {currentItem?.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color="primary">
              {formatCurrency(currentItem?.price)}
            </Typography>
          </Grid>
        </Container>
      </Grid>
      {
        !!currentItem?.options?.length && (
          <Grid item xs={12}>
            <Container>
              {
              currentItem?.options?.map((option) => (
                <Grid
                  key={option.id}
                  item
                  xs={12}
                  ref={(el) => { (itemRefs.current[option.id] = el); }}
                >
                  <CheckboxGroup
                    required={option.required}
                    dualLabel
                    error={selected.errors.includes(option.id)}
                    onChange={
                      (e) => handleChangeOptions(option.id, e.target.value, option.max_choice)
                    }
                    label={getLabel(option.name, option.max_choice)}
                    data={getOptionList(option.option_list, selected.options[option.id])}
                  />
                </Grid>
              ))
            }
            </Container>
          </Grid>
        )
      }
      <Grid item xs={12}>
        <Container justifyContent="center">
          <IconButton
            color="primary"
            onClick={() => handleChangeQuantity(-1)}
            disabled={selected.quantity === 1}
            size="large"
          >
            <RemoveCircleIcon fontSize="inherit" />
          </IconButton>
          <Box display="flex" alignItems="center" paddingInline={2}>
            <Typography variant="h6">
              {selected.quantity}
            </Typography>
          </Box>
          <IconButton
            color="primary"
            onClick={() => handleChangeQuantity(1)}
            disabled={selected.quantity === 10}
            size="large"
          >
            <AddCircleIcon fontSize="inherit" />
          </IconButton>
        </Container>
      </Grid>
    </Grid>
  );
}

export default ItemPage;
