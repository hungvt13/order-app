import MuiIconButton, { IconButtonProps } from "@mui/material/IconButton";

function IconButton({ children, ...restProps } : IconButtonProps) {

  return (
    <MuiIconButton {...restProps}>
      {children}
    </MuiIconButton>
  );
};

export default IconButton;