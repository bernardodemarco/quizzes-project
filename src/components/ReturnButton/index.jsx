import P from 'prop-types';
import * as Styled from './styles';

export const ReturnButton = ({ onReturnButtonClick }) => {
  return (
    <Styled.ImageContainer onClick={onReturnButtonClick}>
      <Styled.Image src="/assets/images/back-icon.svg" alt="Return button" />
    </Styled.ImageContainer>
  );
};

ReturnButton.propTypes = {
  onReturnButtonClick: P.func.isRequired,
};
