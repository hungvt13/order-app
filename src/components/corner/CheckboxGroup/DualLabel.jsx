import Box from '@mui/material/Box';

// eslint-disable-next-line react/prop-types
function DualLabel({ startLabel, endLabel }) {
  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      <span>
        {startLabel}
      </span>
      <span>
        {endLabel}
      </span>
    </Box>
  );
}

export default DualLabel;
