import { withRouter } from 'storybook-addon-react-router-v6';

import { RecoverPassword } from '.';
import { AuthProvider } from '../../contexts/AuthProvider';

export default {
  title: 'RecoverPassword',
  component: RecoverPassword,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/recover-password',
    },
  },
};

export const Template = () => (
  <AuthProvider>
    <RecoverPassword />
  </AuthProvider>
);
