// react-router-dom
import { createBrowserRouter } from 'react-router-dom';

// components
import { RequireAuth } from './components/RequireAuth';

// templates
import { Login } from './templates/Login';
import { SignUp } from './templates/SignUp';
import { RecoverPassword } from './templates/RecoverPassword';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <h1>Require Auth</h1>
      </RequireAuth>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/recover-password',
    element: <RecoverPassword />,
  },
]);
