import { HomeNav } from '.';

export default {
  title: 'HomeNav',
  component: HomeNav,
  args: {
    userName: 'Joãozinho da Costa',
  },
  argTypes: {
    userName: { type: 'string' },
  },
};

export const Template = (args) => <HomeNav {...args} />;
