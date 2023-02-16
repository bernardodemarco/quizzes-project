import P from 'prop-types';
import * as Styled from './styles';

export const PageContainer = ({ children, isCentered = true }) => {
  return (
    <Styled.Container isCentered={isCentered}>{children}</Styled.Container>
  );
};

PageContainer.propTypes = {
  children: P.node.isRequired,
  isCentered: P.bool,
};
