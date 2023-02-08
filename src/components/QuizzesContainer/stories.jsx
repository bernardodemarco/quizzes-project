import { QuizzesContainer } from '.';
import { PageContainer } from './../PageContainer';
import { notAnsweredQuizzes, answeredQuizzes } from './mock';

export default {
  title: 'QuizzesContainer',
  component: QuizzesContainer,
  args: {
    quizzes: notAnsweredQuizzes,
  },
};

export const NotAnsweredQuizzesGrid = (args) => (
  <PageContainer>
    <QuizzesContainer {...args} />
  </PageContainer>
);

export const AnsweredQuizzesGrid = (args) => (
  <PageContainer>
    <QuizzesContainer {...args} />
  </PageContainer>
);
AnsweredQuizzesGrid.args = {
  quizzes: answeredQuizzes,
};
