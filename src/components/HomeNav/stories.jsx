import { HomeNav } from '.';

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

export const Template = (args) => <HomeNav {...args} />;
