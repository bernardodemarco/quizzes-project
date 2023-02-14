import P from 'prop-types';
import * as Styled from './styles';

import { QuizCard } from './../QuizCard';

export const QuizzesContainer = ({ quizzes }) => {
  return (
    <Styled.Grid isAnswered={quizzes[0].isAnswered}>
      {quizzes.map((quiz) => {
        return (
          <QuizCard
            key={quiz.id}
            title={quiz.title}
            shortDescription={quiz.shortDescription}
            imgSrc={quiz.imgSrc}
            numOfQuestions={quiz.numOfQuestions}
            difficulty={quiz.difficulty}
            isAnswered={quiz.isAnswered}
            answeredDate={quiz.answeredDate}
            numOfCorrectAnswers={quiz.numOfCorrectAnswers}
          />
        );
      })}
    </Styled.Grid>
  );
};

QuizzesContainer.propTypes = {
  quizzes: P.array,
};
