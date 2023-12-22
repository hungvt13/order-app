import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '../../../components/furniture/Button';

// hooks
import useEdit from '../../../hooks/useEdit';

// utils
import { formatCurrency } from '../../../service/utils/currencyFormatter';

function SummaryItems({
  localId,
  id,
  categoryId,
  quantity,
  name,
  options,
  totalPrice,
}) {
  const { toItemPage } = useEdit();

  return (
    <>
      <Grid item xs={1}>
        <Typography variant="body1" fontWeight="bold">
          {quantity}
          x
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" fontWeight="bold">
              {name}
            </Typography>
          </Grid>
          {
            options.map((option) => (
              <Grid key={uuidv4()} item xs={12}>
                <Typography variant="body1">
                  {option.name}
                </Typography>
              </Grid>
            ))
          }
          <Grid item xs={12}>
            <Button
              variant="text"
              size="small"
              color="info"
              onClick={() => toItemPage(categoryId, id, localId)}
              sx={{ padding: 0, minWidth: 'auto' }}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1">
          {formatCurrency(totalPrice)}
        </Typography>
      </Grid>
    </>
  );
}

SummaryItems.propTypes = {
  localId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default SummaryItems;
