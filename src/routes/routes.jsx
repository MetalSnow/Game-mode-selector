import Lobby from '../components/Lobby';
import App from '../App';
import ErrorPage from '../components/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'lobby',
    element: <Lobby />,
  },
  {
    path: 'lobby/:name',
    element: <Lobby />,
  },
];

export default routes;
