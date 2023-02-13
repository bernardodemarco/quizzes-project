import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({
  children,
  background = true,
  onClick,
  fontSize = 'medium',
  fontWeight = 'normal',
  lineHeight = 'normal',
  type = 'button',
}) => {
  return (
    <Styled.Button
      background={background}
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      type={type}
    >
      {children}
    </Styled.Button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onClick: P.func,
  fontSize: P.oneOf(['small', 'medium', 'large']),
  fontWeight: P.oneOf(['light', 'normal', 'bold']),
  background: P.bool,
  lineHeight: P.string,
  type: P.oneOf(['button', 'submit']),
};
