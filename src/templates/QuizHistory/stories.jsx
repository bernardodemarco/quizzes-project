import { withRouter } from 'storybook-addon-react-router-v6';

import { QuizHistory } from '.';
import { AuthProvider } from '../../contexts/AuthProvider';

export default {
  title: 'QuizHistory',
  component: QuizHistory,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/history',
    },
  },
};

export const Template = () => (
  <AuthProvider>
    <QuizHistory />
  </AuthProvider>
);
