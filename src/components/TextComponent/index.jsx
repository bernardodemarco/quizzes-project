import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({
  children,
  fontSize = 'medium',
  fontWeight = 'normal',
  color = 'dark',
  lineHeight = 'normal',
  onClick,
}) => {
  return (
    <Styled.Text
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      lineHeight={lineHeight}
      onClick={onClick}
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
  onClick: P.func,
};
