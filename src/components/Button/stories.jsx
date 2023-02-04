import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Inside of Storybook',
  },
  argTypes: {
    children: { type: 'string' },
    onClick: { action: 'clicked' },
  },
};

export const Template = (args) => (
  <div style={{ maxWidth: '60rem' }}>
    <Button {...args} />
  </div>
);
