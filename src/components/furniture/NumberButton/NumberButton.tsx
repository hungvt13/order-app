/* eslint-disable react/prop-types */
import { styled } from '@mui/material/styles';

import Button from '../Button';
import { ButtonProps } from '@mui/material/Button';

const StyledBtn = styled(Button)(({ theme }) => ({
  borderRadius: '50%',
  padding: theme.spacing(0),
  minWidth: '23px',
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function NumberButton({ children, ...restProps } : ButtonProps) {
  return (
    <StyledBtn {...restProps}>
      {children}
    </StyledBtn>
  );
}

export default NumberButton;
