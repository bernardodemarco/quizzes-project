import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: 'Inside of Storybook',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <TextComponent {...args} />;
