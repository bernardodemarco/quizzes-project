import { withRouter } from 'storybook-addon-react-router-v6';

import { SignUp } from '.';
import { AuthProvider } from '../../contexts/AuthProvider';

export default {
  title: 'SignUp',
  component: SignUp,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/sign-up',
    },
  },
};

export const Template = () => (
  <AuthProvider>
    <SignUp />
  </AuthProvider>
);
