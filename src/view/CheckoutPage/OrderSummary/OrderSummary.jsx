/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

// components
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '../../../components/furniture/Button';
import SummaryItems from './SummaryItems';

// constants
import PAGE_PATH from '../../../service/routes/constants';

function OrderSummary({ items }) {
  const navigate = useNavigate();

  const handleAddMore = () => {
    navigate(PAGE_PATH.MENU_PAGE);
  };

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={6}>
        <Typography variant="h6">
          Order summary
        </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="flex-end">
        <Button
          color="info"
          variant="outlined"
          size="small"
          onClick={handleAddMore}
        >
          Add more
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container rowSpacing={2} columnSpacing={0.5}>
          {
            items.map((item) => (
              <SummaryItems
                key={item.localId}
                localId={item.localId}
                id={item.id.toString()}
                categoryId={item.categoryId}
                quantity={item.quantity}
                name={item.name}
                options={item.options}
                totalPrice={item.totalPrice}
              />
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OrderSummary;
