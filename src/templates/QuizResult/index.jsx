import * as Styled from './styles';

import { useNavigate, useParams } from 'react-router-dom';

import { useEffect } from 'react';

import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { PageContainer } from '../../components/PageContainer';
import { TextComponent } from '../../components/TextComponent';
import { ReturnButton } from '../../components/ReturnButton';
import { useQuizDataContext } from '../../hooks/useQuizDataContext';

export const QuizResult = () => {
  const quizData = useQuizDataContext()[0];
  const navigate = useNavigate();
  const { id } = useParams();

  const headingFeedback =
    quizData.numOfQuestions === quizData.numOfCorrectAnswers
      ? 'Você é um mestre'
      : 'Quase lá...';

  const descriptionFeedback =
    quizData.numOfQuestions === quizData.numOfCorrectAnswers
      ? 'Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!'
      : 'Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!';

  useEffect(() => {
    if (quizData.numOfQuestions === 0 && quizData.numOfCorrectAnswers === 0) {
      navigate(`/quizzes/${id}`);
    }
  }, [quizData, id, navigate]);

  return (
    <>
      <ReturnButton onReturnButtonClick={() => navigate(`/quizzes/${id}`)} />
      <PageContainer>
        <Styled.Container>
          <Heading
            as="h2"
            fontSize="small"
            fontWeight="normal"
            lineHeight="32px"
          >
            Resultados
          </Heading>
          <Styled.TextContainer>
            <Heading fontSize="xLarge" lineHeight="58.8px">
              {quizData.numOfCorrectAnswers}/{quizData.numOfQuestions}
            </Heading>
            <Heading
              as="h2"
              fontSize="small"
              fontWeight="normal"
              lineHeight="32px"
            >
              {headingFeedback}
            </Heading>
            <TextComponent
              color="darkGray"
              lineHeight="26px"
              fontSize="large"
              fontWeight="light"
            >
              {descriptionFeedback}
            </TextComponent>
          </Styled.TextContainer>
          <Button lineHeight="18px" onClick={() => navigate(`/quizzes/${id}`)}>
            Finalizar
          </Button>
        </Styled.Container>
      </PageContainer>
    </>
  );
};
