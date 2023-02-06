import P from 'prop-types';
import * as Styled from './styles';

export const QuizDifficulty = ({ children, backgroundColor }) => {
  return (
    <Styled.Label backgroundColor={backgroundColor}>{children}</Styled.Label>
  );
};

QuizDifficulty.propTypes = {
  children: P.node.isRequired,
  backgroundColor: P.oneOf(['secondary', 'error']).isRequired,
};
