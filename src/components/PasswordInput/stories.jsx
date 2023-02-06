import { PasswordInput } from '.';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
  args: {
    placeholder: 'Inside of Storybook',
  },
  argTypes: {
    placeholder: { type: 'string' },
  },
};

export const Template = (args) => (
  <div style={{ width: '50rem', height: '5.3rem' }}>
    <PasswordInput {...args} />
  </div>
);
