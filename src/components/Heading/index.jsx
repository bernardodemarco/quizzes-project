import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  as = 'h1',
  fontSize = 'medium',
  fontWeight = 'bold',
}) => {
  return (
    <Styled.Heading as={as} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Styled.Heading>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  fontSize: P.oneOf(['xSmall', 'small', 'medium', 'large', 'xLarge']),
  fontWeight: P.oneOf(['light', 'normal', 'bold']),
};
