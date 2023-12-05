import React from 'react';
import { styled } from '@mui/material/styles';

// components
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '../../components/furniture/IconButton';

import useBackBtn from '../../hooks/useBackBtn';

const StyledDiv = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(2),
}));

const StyledBtn = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: 80,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[4],
  },
}));

function BackButton() {
  const { show, navigateTo } = useBackBtn();

  return show
    && (
      <StyledDiv>
        <StyledBtn onClick={navigateTo}>
          <ArrowBackIcon color="inherit" />
        </StyledBtn>
      </StyledDiv>
    );
}

export default BackButton;
