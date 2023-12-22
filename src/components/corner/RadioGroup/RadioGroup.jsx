import PropTypes from 'prop-types';

import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioGroup({
  label,
  data,
  required,
  error,
  onChange,
  ...restProps
}) {
  return (
    <FormControl
      fullWidth
      required={required}
      onChange={onChange}
      error={error}
      {...restProps}
    >
      {
        !!label.length && (
          <FormLabel>{label}</FormLabel>
        )
      }
      <MuiRadioGroup
        defaultValue="female"
        name="radio-buttons-group"
      >
        {
          data.map(({
            value, label: startLabel, ...restDataProps
          }) => (
            <FormControlLabel
              disableTypography
              key={value}
              value={value}
              sx={{ width: '100%' }}
              control={<Radio />}
              label={startLabel}
              {...restDataProps}
            />
          ))
        }
      </MuiRadioGroup>
    </FormControl>
  );
}

RadioGroup.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  required: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  label: '',
  data: [],
  required: false,
  error: false,
  onChange: () => {},
};

export default RadioGroup;
