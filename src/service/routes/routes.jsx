import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import retry from './retry';

import PAGE_PATH from './constants';

const App = lazy(() => retry(() => import('../../view/App')));
const ErrorPage = lazy(() => retry(() => import('../../view/ErrorPage')));
const UserPage = lazy(() => retry(() => import('../../view/UserPage')));
const LandingPage = lazy(() => retry(() => import('../../view/LandingPage')));
const MenuPage = lazy(() => retry(() => import('../../view/MenuPage')));

const routes = createBrowserRouter([
  {
    path: PAGE_PATH.HOME_PAGE,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PAGE_PATH.MENU_PAGE,
        element: <MenuPage />,
      },
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
