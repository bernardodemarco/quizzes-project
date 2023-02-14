import { withRouter } from 'storybook-addon-react-router-v6';

import { QuizDescription } from '.';
import { AuthProvider } from '../../contexts/AuthProvider';

export default {
  title: 'QuizDescription',
  component: QuizDescription,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/quizzes/:id',
      routeParams: { id: '95b93857-476d-450d-b9a7-0ef0bd6c2cc5' },
    },
  },
};

export const Template = () => (
  <AuthProvider>
    <QuizDescription />
  </AuthProvider>
);
