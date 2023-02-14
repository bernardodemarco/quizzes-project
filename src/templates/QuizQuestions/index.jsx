import * as Styled from './styles';

import { useEffect, useRef } from 'react';

import { useQuizDataContext } from '../../hooks/useQuizDataContext';

import { ReturnButton } from './../../components/ReturnButton';
import { TextComponent } from './../../components/TextComponent';
import { Heading } from './../../components/Heading';
import { QuizQuestionOptions } from './../../components/QuizQuestionOptions';
import { PageContainer } from './../../components/PageContainer';

export const QuizQuestions = () => {
  const isMounted = useRef(true);

  const [quizData, actions] = useQuizDataContext();
  const question = quizData.questions[quizData.currentQuestionIndex];

  useEffect(() => {
    actions.setQuestions().then((setQuestions) => {
      if (isMounted.current) {
        setQuestions();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [actions]);

  if (!question) {
    return <h1>loading</h1>;
  }

  return (
    <>
      <ReturnButton />
      <PageContainer>
        <Styled.Container>
          <TextComponent fontSize="large" fontWeight="light" lineHeight="26px">
            {quizData.currentQuestionIndex + 1} de {quizData.numOfQuestions}
          </TextComponent>
          <Heading fontSize="small" lineHeight="32px" fontWeight="normal">
            {question.questionText}
          </Heading>
          <Styled.Image imgSrc={question.imgSrc} />
          <QuizQuestionOptions
            correctAnswerIndex={question.correctAnswerIndex}
            answers={question.answers}
          />
        </Styled.Container>
      </PageContainer>
    </>
  );
};
