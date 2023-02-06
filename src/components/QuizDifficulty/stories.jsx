import { QuizDifficulty } from '.';

export default {
  title: 'QuizDifficulty',
  component: QuizDifficulty,
  args: {
    children: 'easy',
    backgroundColor: 'secondary',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div
    style={{
      width: '40rem',
      height: '15rem',
      border: '0.1rem solid gray',
      borderRadius: '0.5rem',
      position: 'relative',
      background: 'green',
    }}
  >
    <QuizDifficulty {...args} />
  </div>
);
