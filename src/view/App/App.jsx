import { Outlet, useNavigate } from 'react-router-dom';

// constants
import PAGE_PATH from '../../service/routes/constants';

// components
import Button from '../../components/furniture/Button';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div>App Page</div>
      <Button
        onClick={() => navigate(PAGE_PATH.LANDING_PAGE)}
      >
        Landing Page
      </Button>
      <Button
        color="secondary"
        onClick={() => navigate(PAGE_PATH.USER_PAGE)}
      >
        User Page
      </Button>
      <Button variant="contained">Test</Button>
      <Outlet />
    </div>
  );
}

export default App;
