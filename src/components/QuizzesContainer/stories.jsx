import { QuizzesContainer } from '.';
import { PageContainer } from './../PageContainer';
import { notAnsweredQuizzes, answeredQuizzes } from './mock';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'QuizzesContainer',
  component: QuizzesContainer,
  args: {
    quizzes: notAnsweredQuizzes,
  },
};

export const NotAnsweredQuizzesGrid = (args) => (
  <Router>
    <PageContainer>
      <QuizzesContainer {...args} />
    </PageContainer>
  </Router>
);

export const AnsweredQuizzesGrid = (args) => (
  <Router>
    <PageContainer>
      <QuizzesContainer {...args} />
    </PageContainer>
  </Router>
);
AnsweredQuizzesGrid.args = {
  quizzes: answeredQuizzes,
};
