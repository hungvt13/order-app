import { createTheme } from '@mui/material';
import {
  orange,
} from '@mui/material/colors';

const generateTheme = (preloadedTheme) => createTheme({
  palette: {
    primary: {
      main: orange[600],
    },
  },
}, preloadedTheme);

export default generateTheme;
