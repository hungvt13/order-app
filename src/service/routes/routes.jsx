import { createBrowserRouter } from 'react-router-dom';

import PAGE_PATH from './constants';

import App from '../../view/App';
import ErrorPage from '../../view/ErrorPage';
import UserPage from '../../view/UserPage';
import LandingPage from '../../view/LandingPage/LandingPage';

const routes = createBrowserRouter([
  {
    path: PAGE_PATH.HOME_PAGE,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PAGE_PATH.LANDING_PAGE,
        element: <LandingPage />,
      },
      {
        path: PAGE_PATH.USER_PAGE,
        element: <UserPage />,
      },
    ],
  },
]);

export default routes;
