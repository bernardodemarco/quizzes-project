// react-router-dom
import { createBrowserRouter } from 'react-router-dom';

// components
import { RequireAuth } from './components/RequireAuth';

// templates
import { Login } from './templates/Login';
import { SignUp } from './templates/SignUp';
import { RecoverPassword } from './templates/RecoverPassword';
import { Home } from './templates/Home';
import { QuizHistory } from './templates/QuizHistory';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: '/history',
    element: (
      <RequireAuth>
        <QuizHistory />
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
