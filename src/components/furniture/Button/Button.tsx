
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  padding: theme.spacing(2),
}));

function Button({ children, ...restProps } : ButtonProps) {
  return (
    <StyledButton {...restProps}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  variant: 'dashed',
};

export default Button;
