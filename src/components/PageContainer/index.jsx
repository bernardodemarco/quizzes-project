import P from 'prop-types';
import * as Styled from './styles';

export const PageContainer = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

PageContainer.propTypes = {
  children: P.node.isRequired,
};
