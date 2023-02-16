import { withRouter } from 'storybook-addon-react-router-v6';

import { QuizResult } from '.';
import { AuthProvider } from '../../contexts/AuthProvider';
import { QuizDataProvider } from '../../contexts/QuizDataProvider';

export default {
  title: 'QuizResult',
  component: QuizResult,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/quizzes/:id/result',
      routeParams: { id: '95b93857-476d-450d-b9a7-0ef0bd6c2cc5' },
    },
  },
};

export const Template = () => (
  <AuthProvider>
    <QuizDataProvider>
      <QuizResult />
    </QuizDataProvider>
  </AuthProvider>
);
