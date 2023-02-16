import { HomeNav } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'HomeNav',
  component: HomeNav,
  args: {
    username: 'Joãozinho da Costa',
  },
  argTypes: {
    username: { type: 'string' },
  },
};

export const Template = (args) => (
  <Router>
    <HomeNav {...args} />
  </Router>
);
