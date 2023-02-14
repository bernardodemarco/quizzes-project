import P from 'prop-types';
import * as Styled from './styles';

import { useNavigate } from 'react-router-dom';

import { QuizCard } from './../QuizCard';

export const QuizzesContainer = ({ quizzes }) => {
  const navigate = useNavigate();

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
            onClick={() => {
              if (quiz.isAnswered) return;
              navigate(`/quizzes/${quiz.id}`);
            }}
          />
        );
      })}
    </Styled.Grid>
  );
};

QuizzesContainer.propTypes = {
  quizzes: P.array,
};
