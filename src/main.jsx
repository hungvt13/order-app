import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import './index.css';

import store from './state/store';
import routes from './service/routes/routes';
import generateTheme from './service/theme/theme';

const theme = generateTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading</div>}>
          <RouterProvider router={routes} />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
