import P from 'prop-types';
import * as Styled from './styles';

import { Heading } from './../Heading';
import { TextComponent } from './../TextComponent';

export const QuizNotFound = ({ title, description }) => {
  return (
    <Styled.Container>
      <Styled.Image
        src="assets/images/not-found-image.svg"
        alt="No quizzes have been found image"
      />
      <Heading fontSize="xSmall" fontWeight="normal" as="h2">
        {title}
      </Heading>
      <TextComponent fontWeight="light" color="darkGray">
        {description}
      </TextComponent>
    </Styled.Container>
  );
};

QuizNotFound.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
};
