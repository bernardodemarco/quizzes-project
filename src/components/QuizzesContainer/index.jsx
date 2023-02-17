import P from 'prop-types';
import * as Styled from './styles';

import { useNavigate } from 'react-router-dom';

import { QuizCard } from './../QuizCard';
import { Heading } from '../Heading';

export const QuizzesContainer = ({ quizzes, numOfResults }) => {
  const navigate = useNavigate();
  const navState = quizzes[0].isAnswered ? 'fromHistory' : '';

  return (
    <>
      {!quizzes[0].isAnswered && numOfResults !== null && (
        <Heading
          as="h2"
          fontSize="xSmall"
          fontWeight="normal"
          lineHeight="26px"
        >
          {numOfResults} Resultados
        </Heading>
      )}
      <Styled.Grid
        isAnswered={quizzes[0].isAnswered}
        numOfResults={numOfResults}
      >
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
                navigate(`/quizzes/${quiz.id}`, { state: navState });
              }}
            />
          );
        })}
      </Styled.Grid>
    </>
  );
};

QuizzesContainer.propTypes = {
  quizzes: P.array,
  numOfResults: P.number,
};
