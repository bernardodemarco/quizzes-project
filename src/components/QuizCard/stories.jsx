import { QuizCard } from '.';
import { answeredQuiz, notAnsweredQuiz } from './mock';

export default {
  title: 'QuizCard',
  component: QuizCard,
  args: answeredQuiz,
};

export const AnsweredQuizCard = (args) => (
  <div style={{ width: '55rem' }}>
    <QuizCard {...args} />
  </div>
);

export const NotAnsweredQuizCard = (args) => (
  <div style={{ width: '55rem' }}>
    <QuizCard {...args} />
  </div>
);
NotAnsweredQuizCard.args = notAnsweredQuiz;
