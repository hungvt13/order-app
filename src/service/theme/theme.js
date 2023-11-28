import { createTheme } from '@mui/material';
import {
  red,
} from '@mui/material/colors';

const generateTheme = (preloadedTheme) => createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
}, preloadedTheme);

export default generateTheme;
