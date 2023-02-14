import { withRouter } from 'storybook-addon-react-router-v6';

import { Home } from '.';
import { AuthProvider } from '../../contexts/AuthProvider';

export default {
  title: 'Home',
  component: Home,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};

export const Template = () => (
  <AuthProvider>
    <Home />
  </AuthProvider>
);
