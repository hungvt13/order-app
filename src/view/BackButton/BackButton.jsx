import React from 'react';
import { styled } from '@mui/material/styles';

// components
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '../../components/furniture/IconButton';

import useBackBtn from '../../hooks/useBackBtn';

const StyledBtn = styled(IconButton)(({ theme, isShow }) => ({
  position: 'absolute',
  display: (isShow ? 'flex' : 'none'),
  top: 80,
  left: 20,
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

  return (
    <StyledBtn onClick={navigateTo} isShow={show}>
      <ArrowBackIcon color="inherit" />
    </StyledBtn>
  );
}

export default BackButton;
