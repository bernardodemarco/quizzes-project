import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({
  children,
  fontSize = 'medium',
  fontWeight = 'normal',
  color = 'dark',
  lineHeight = 'normal',
}) => {
  return (
    <Styled.Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      lineHeight={lineHeight}
    >
      {children}
    </Styled.Text>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
  fontSize: P.oneOf(['large', 'medium', 'small']),
  fontWeight: P.oneOf(['light', 'normal', 'bold']),
  color: P.oneOf(['darkGray', 'dark', 'success', 'error']),
  lineHeight: P.string,
};
