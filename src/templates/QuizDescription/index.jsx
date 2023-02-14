import * as Styled from './styles';

import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useQuizDataContext } from './../../hooks/useQuizDataContext';

import { ReturnButton } from './../../components/ReturnButton';
import { PageContainer } from './../../components/PageContainer';
import { Heading } from './../../components/Heading';
import { QuizDifficulty } from './../../components/QuizDifficulty';
import { TextComponent } from './../../components/TextComponent';
import { Button } from './../../components/Button';

import defaultQuiz from './mock';

export const QuizDescription = () => {
  const [, actions] = useQuizDataContext();
  const navigate = useNavigate();
  const { id } = useParams();
  // eslint-disable-next-line
  const [quiz, setQuiz] = useState(defaultQuiz);

  const handleButtonClick = () => {
    actions.activateQuiz();
    actions.setNumOfQuestions(quiz.numOfQuestions);
    navigate(`/quizzes/${id}/questions`);
  };

  return (
    <>
      <ReturnButton onReturnButtonClick={() => navigate('/')} />
      <PageContainer>
        <Styled.Container>
          <Heading fontSize="large" lineHeight="42px">
            {quiz.title}
          </Heading>
          <Styled.ImageContainer>
            <Styled.Image src={quiz.imgSrc} alt={`${quiz.title} quiz image`} />
            <QuizDifficulty
              backgroundColor={
                quiz.difficulty === 'easy' ? 'secondary' : 'error'
              }
            >
              {quiz.difficulty}
            </QuizDifficulty>
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Heading
              fontWeight="normal"
              fontSize="xSmall"
              lineHeight="26px"
              as="h2"
            >
              Sobre o quiz
            </Heading>
            <TextComponent fontWeight="light" lineHeight="21px">
              {quiz.description}
            </TextComponent>
          </Styled.TextContainer>
          <Styled.TextContainer>
            <Heading
              fontWeight="normal"
              fontSize="xSmall"
              lineHeight="26px"
              as="h2"
            >
              Quantidade de perguntas
            </Heading>
            <TextComponent fontWeight="light" lineHeight="21px">
              {quiz.numOfQuestions}
            </TextComponent>
          </Styled.TextContainer>
          <Button onClick={handleButtonClick} lineHeight="18px">
            Fazer tentativa
          </Button>
        </Styled.Container>
      </PageContainer>
    </>
  );
};
