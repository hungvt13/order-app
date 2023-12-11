
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
function Button({ children, ...restProps } : ButtonProps) {
  return (
    <MuiButton {...restProps}>
      {children}
    </MuiButton>
  );
}

Button.defaultProps = {
  variant: 'dashed',
};

export default Button;
