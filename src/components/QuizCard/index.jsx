import P from 'prop-types';
import * as Styled from './styles';

import { QuizDifficulty } from '../QuizDifficulty';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';

export const QuizCard = ({
  onClick,
  title,
  shortDescription,
  imgSrc,
  difficulty,
  isAnswered,
  numOfQuestions,
  numOfCorrectAnswers,
  answeredDate,
}) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.Image imgSrc={imgSrc}>
        {!isAnswered && (
          <QuizDifficulty
            backgroundColor={difficulty === 'easy' ? 'secondary' : 'error'}
          >
            {difficulty}
          </QuizDifficulty>
        )}
      </Styled.Image>
      <Styled.TextContainer>
        {isAnswered && (
          <Styled.FeedbackContainer>
            <TextComponent
              fontSize="small"
              color={
                numOfCorrectAnswers / numOfQuestions >= 0.5
                  ? 'success'
                  : 'error'
              }
              lineHeight="1.8rem"
            >{`Você acertou ${numOfCorrectAnswers} de ${numOfQuestions}`}</TextComponent>
            <TextComponent
              fontSize="small"
              color="darkGray"
              lineHeight="1.8rem"
            >{`Em ${answeredDate}`}</TextComponent>
          </Styled.FeedbackContainer>
        )}
        <Heading as="h3" fontWeight="normal" fontSize="small">
          {title}
        </Heading>
        <TextComponent fontWeight="light" lineHeight="2.1rem">
          {shortDescription}
        </TextComponent>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

QuizCard.propTypes = {
  title: P.string.isRequired,
  imgSrc: P.string.isRequired,
  shortDescription: P.string.isRequired,
  answeredDate: P.string,
  numOfQuestions: P.number.isRequired,
  numOfCorrectAnswers: P.number,
  isAnswered: P.bool.isRequired,
  difficulty: P.oneOf(['hard', 'easy']).isRequired,
  onClick: P.func,
};
