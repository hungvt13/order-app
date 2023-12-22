import React from 'react';
import { useSelector } from 'react-redux';

// component
import Grid from '@mui/material/Grid';
import Button from '../../../components/furniture/Button';

// state
import { displaySelector } from '../../../state/display';

function ActionBtn() {
  const barConfigs = useSelector(displaySelector.barConfigs);

  return (
    <Grid container sx={{ height: '100%' }}>
      {
        !!barConfigs.subcontent && (
        <Grid item xs={12}>
          {barConfigs.subcontent}
        </Grid>
        )
      }
      <Grid item xs={12}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          size="large"
          sx={{ height: '100%' }}
        >
          {barConfigs.content}
        </Button>
      </Grid>
    </Grid>
  );
}

export default ActionBtn;
