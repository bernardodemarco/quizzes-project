import { QuizQuestions } from '.';

export default {
  title: 'QuizQuestions',
  component: QuizQuestions,
  args: {
    children: 'Inside of Storybook',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <QuizQuestions {...args} />;
