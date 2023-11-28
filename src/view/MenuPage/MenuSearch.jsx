import { styled } from '@mui/material/styles';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

import Container from '../../components/furniture/Container';
import TextField from '../../components/furniture/TextField';

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.spacing(1),
}));

function MenuSearch() {
  return (
    <Container>
      <StyledTextField
        variant="standard"
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <TuneIcon />
            </InputAdornment>),
        }}
      />
    </Container>
  );
}

export default MenuSearch;
