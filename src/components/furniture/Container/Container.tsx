import { styled } from '@mui/material/styles';

import Grid, { GridProps } from '@mui/material/Grid';

const ContainerGrid = styled(Grid)<GridProps>(({ theme }) => ({
  // paddingInline: theme.spacing(2),
  padding: theme.spacing(2),
}));

function Container({ children, ...restProps } : GridProps) {
  return (
    <ContainerGrid container {...restProps}>
      {children}
    </ContainerGrid>
  );
};

export default Container;