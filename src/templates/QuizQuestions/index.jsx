import * as Styled from './styles';

import { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useQuizDataContext } from '../../hooks/useQuizDataContext';

import { ReturnButton } from './../../components/ReturnButton';
import { TextComponent } from './../../components/TextComponent';
import { Heading } from './../../components/Heading';
import { QuizQuestionOptions } from './../../components/QuizQuestionOptions';
import { PageContainer } from './../../components/PageContainer';
import { Loading } from '../Loading';

export const QuizQuestions = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [quizData, actions] = useQuizDataContext();
  const question = quizData.questions[quizData.currentQuestionIndex];

  useEffect(() => {
    let ignore = false;
    actions.setQuestions(id).then((setQuestions) => {
      !ignore && setQuestions();
    });

    return () => {
      ignore = true;
    };
  }, [actions, id]);

  useEffect(() => {
    if (!quizData.isActive) {
      navigate(`/quizzes/${id}/result`);
    }
  }, [quizData.isActive, navigate, id]);

  if (!question) {
    return <Loading />;
  }

  return (
    <>
      <ReturnButton onReturnButtonClick={() => navigate(`/quizzes/${id}`)} />
      <PageContainer>
        <Styled.Container>
          <Styled.TextContainer>
            <TextComponent
              fontSize="large"
              fontWeight="light"
              lineHeight="26px"
            >
              {quizData.currentQuestionIndex + 1} de {quizData.numOfQuestions}
            </TextComponent>
            <Heading fontSize="small" lineHeight="32px" fontWeight="normal">
              {question.questionText}
            </Heading>
          </Styled.TextContainer>
          <Styled.Image imgSrc={question.imgSrc} />
          <QuizQuestionOptions
            correctAnswerIndex={question.correctAnswerIndex - 1}
            answers={question.answers}
          />
        </Styled.Container>
      </PageContainer>
    </>
  );
};
