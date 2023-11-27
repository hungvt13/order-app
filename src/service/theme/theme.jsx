import { createTheme } from '@mui/material';
import {
  blue, red, green, orange,
} from '@mui/material/colors';

const generateTheme = (preloadedTheme) => createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            textTransform: 'none',
            border: `2px dashed ${blue[500]}`,
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: `4px dashed ${red[500]}`,
          },
        },
      ],
    },
  },
}, preloadedTheme);

export default generateTheme;
