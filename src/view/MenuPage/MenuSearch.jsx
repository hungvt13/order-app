import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';

import Container from '../../components/furniture/Container';
import TextField from '../../components/furniture/TextField';
import Select from '../../components/furniture/Select';
import MenuItem from '../../components/furniture/MenuItem';
import IconButton from '../../components/furniture/IconButton';

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.spacing(1),
  paddingLeft: theme.spacing(1),
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.spacing(1),
  paddingLeft: theme.spacing(1),
}));

function MenuSearch({
  selectValue, onChangeSelect, selectItems, searchValue, onChangeSearch,
}) {
  const [isSearch, setIsSearch] = useState(false);

  const toggleSearchFocus = (isFocused) => {
    setIsSearch(isFocused);
  };

  const handleClearSearch = () => {
    onChangeSearch('');
  };

  return (
    <Container>
      {
        !isSearch && (
          <Grid item xs={9} pr={1}>
            <StyledSelect
              fullWidth
              variant="standard"
              value={selectValue}
              label="Categories"
              onChange={(e) => onChangeSelect(e.target.value)}
              disableUnderline
            >
              {
            selectItems.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))
          }
            </StyledSelect>
          </Grid>
        )
      }
      <Grid item xs={isSearch ? 12 : 3}>
        <StyledTextField
          variant="standard"
          fullWidth
          placeholder="Search"
          value={searchValue}
          onFocus={() => toggleSearchFocus(true)}
          onBlur={() => toggleSearchFocus(false)}
          onChange={(e) => onChangeSearch(e.target.value)}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            ...(searchValue.length !== 0 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleClearSearch}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            } : {}),

          }}
        />
      </Grid>
    </Container>
  );
}

MenuSearch.propTypes = {
  searchValue: PropTypes.string,
  onChangeSearch: PropTypes.func,
  selectValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onChangeSelect: PropTypes.func,
  selectItems: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    label: PropTypes.string,
  })),
};

MenuSearch.defaultProps = {
  searchValue: '',
  onChangeSearch: () => {},
  selectValue: '',
  onChangeSelect: () => {},
  selectItems: [],
};

export default MenuSearch;
