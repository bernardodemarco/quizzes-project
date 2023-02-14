import { withRouter } from 'storybook-addon-react-router-v6';

import { Login } from '.';
import { AuthProvider } from '../../contexts/AuthProvider';

export default {
  title: 'Login',
  component: Login,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/login',
    },
  },
};

export const Template = () => (
  <AuthProvider>
    <Login />
  </AuthProvider>
);
