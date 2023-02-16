// react-router-dom
import { createBrowserRouter } from 'react-router-dom';

// components
import { RequireAuth } from './components/RequireAuth';

// contexts
import { QuizDataProvider } from './contexts/QuizDataProvider';

// templates
import { Login } from './templates/Login';
import { SignUp } from './templates/SignUp';
import { RecoverPassword } from './templates/RecoverPassword';
import { Home } from './templates/Home';
import { QuizHistory } from './templates/QuizHistory';
import { QuizDescription } from './templates/QuizDescription';
import { QuizQuestions } from './templates/QuizQuestions';
import { QuizResult } from './templates/QuizResult';

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
  {
    path: '/quizzes/:id',
    element: (
      <RequireAuth>
        <QuizDataProvider>
          <QuizDescription />
        </QuizDataProvider>
      </RequireAuth>
    ),
  },
  {
    path: '/quizzes/:id/questions',
    element: (
      <RequireAuth>
        <QuizDataProvider>
          <QuizQuestions />
        </QuizDataProvider>
      </RequireAuth>
    ),
  },
  {
    path: '/quizzes/:id/result',
    element: (
      <RequireAuth>
        <QuizDataProvider>
          <QuizResult />
        </QuizDataProvider>
      </RequireAuth>
    ),
  },
]);
