import React from 'react';
import { useSelector } from 'react-redux';

// component
import Button from '../../../components/furniture/Button';

// state
import { displaySelector } from '../../../state/display';

function ActionBtn() {
  const barConfigs = useSelector(displaySelector.barConfigs);

  return (
    <Button
      fullWidth
      color="primary"
      variant="contained"
      onClick={barConfigs.func}
      size="small"
    >
      {barConfigs.content}
    </Button>
  );
}

export default ActionBtn;
