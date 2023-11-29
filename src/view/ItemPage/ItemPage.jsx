import { useSelector, shallowEqual } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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

// state
import { merchantSelector } from '../../state/merchant';

// utils
import { formatCurrency } from '../../service/utils/currencyFormatter';

const StyledImage = styled('img')({
  height: '30dvh',
  width: '100%',
  objectFit: 'fill',
});

function ItemPage() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  const itemId = searchParams.get('itemId');

  const [selected, setSelected] = useState({
    id: null,
    quantity: 1,
    options: {},
    required: [],
  });

  const foodList = useSelector(merchantSelector.merchantFoodList, shallowEqual);
  const currentCategory = foodList?.find(({ id }) => id.toString() === categoryId);
  const currentItem = currentCategory?.menu_items?.find(({ id }) => id.toString() === itemId);

  const getOptionList = (data, selectedOptions) => {
    const populatedData = data.map((item) => ({
      value: item.id,
      label: item.name,
      checked: selectedOptions?.includes(item.id.toString()) || false,
      endLabel: (item.price !== 0) && `+ ${formatCurrency(item.price)}`,
    }));

    return populatedData;
  };

  const getLabel = (name, maxPick) => {
    if (maxPick === 1) {
      return `${name} (Choose ${maxPick})`;
    }

    return `${name} (Max : ${maxPick})`;
  };

  const getSelectedValue = (selectedValues, value, maxPick) => {
    if (selectedValues.includes(value) && maxPick === 1) {
      return selectedValues;
    }

    if (!selectedValues.includes(value) && maxPick === 1) {
      return [value];
    }

    // remove if already selected
    if (selectedValues.includes(value)) {
      return selectedValues.filter((item) => item !== value);
    }

    if (selectedValues.length + 1 <= maxPick) {
      return [...selectedValues, value];
    }

    return selectedValues;
  };

  const handleOnChange = (id, value, maxPick) => {
    setSelected((prevState) => {
      const currentValues = [...prevState.options[id]];
      const finalValue = getSelectedValue(currentValues, value, maxPick);

      return ({
        ...prevState,
        options: {
          ...prevState.options,
          [id]: finalValue,
        },
      });
    });
  };

  const handleChangeQuantity = (num) => {
    setSelected((prevState) => {
      const currentQuantity = prevState.quantity;

      if (currentQuantity + num === 0) return prevState;

      return ({
        ...prevState,
        quantity: prevState.quantity + num,
      });
    });
  };

  useEffect(() => {
    if (currentItem) {
      setSelected((prevState) => ({
        ...prevState,
        id: currentItem.id,
        options: currentItem?.options
          ?.reduce((acc, option) => { acc[option.id] = []; return acc; }, {}),
        required: currentItem?.options
          .filter((option) => option.required)
          .map((option) => option.id),
      }));
    }
  }, [currentItem]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledImage
          src={currentItem?.image_source}
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
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h6" color="primary">
                  {formatCurrency(currentItem?.price)}
                </Typography>
              </Box>
              <Box display="flex">
                <IconButton
                  color="primary"
                  onClick={() => handleChangeQuantity(-1)}
                >
                  <RemoveCircleIcon fontSize="inherit" />
                </IconButton>
                <Box display="flex" alignItems="center">
                  <Typography variant="subtitle1">
                    {selected.quantity}
                  </Typography>
                </Box>
                <IconButton
                  color="primary"
                  onClick={() => handleChangeQuantity(1)}
                >
                  <AddCircleIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container>
          {
            currentItem?.options?.map((option) => (
              <Grid
                key={option.id}
                item
                xs={12}
              >
                <CheckboxGroup
                  required={option.required}
                  dualLabel
                  onChange={(e) => handleOnChange(option.id, e.target.value, option.max_choice)}
                  label={getLabel(option.name, option.max_choice)}
                  data={getOptionList(option.option_list, selected.options[option.id])}
                />
              </Grid>
            ))
          }
        </Container>
      </Grid>
    </Grid>
  );
}

export default ItemPage;
