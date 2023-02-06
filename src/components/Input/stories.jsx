import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Inside of Storybook',
  },
  argTypes: {
    placeholder: { type: 'string' },
  },
};

export const Template = (args) => (
  <div style={{ width: '50rem', height: '5.3rem' }}>
    <Input {...args} />
  </div>
);
