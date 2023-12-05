import PropTypes from 'prop-types';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '../../furniture/Checkbox';
import DualLabel from './DualLabel';

function CheckboxGroup({
  label,
  data,
  dualLabel,
  required,
  error,
  onChange,
}) {
  return (
    <FormControl
      fullWidth
      required={required}
      onChange={onChange}
      error={error}
    >
      <FormLabel>{label}</FormLabel>
      {
          data.map(({
            value, label: startLabel, endLabel, ...restDataProps
          }) => (
            <FormControlLabel
              disableTypography
              key={value}
              value={value}
              sx={{ width: '100%' }}
              control={<Checkbox />}
              label={
                dualLabel
                  ? <DualLabel startLabel={startLabel} endLabel={endLabel} />
                  : startLabel
              }
              {...restDataProps}
            />
          ))
        }
    </FormControl>
  );
}

CheckboxGroup.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  dualLabel: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxGroup.defaultProps = {
  label: 'Checkbox Group',
  data: [],
  dualLabel: false,
  required: false,
  error: false,
  onChange: () => {},
};

export default CheckboxGroup;
