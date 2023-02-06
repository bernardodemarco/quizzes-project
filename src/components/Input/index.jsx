import P from 'prop-types';
import * as Styled from './styles';

const iconSrc = {
  search: 'assets/images/search-icon.svg',
  'e-mail': 'assets/images/email-icon.svg',
  text: 'assets/images/login-icon.svg',
};

export const Input = ({ placeholder, type = 'search' }) => {
  return (
    <Styled.Container>
      <Styled.Input type={type} placeholder={placeholder} required />
      {<Styled.Icon src={iconSrc[type]} alt={`${type} input icon`} />}
    </Styled.Container>
  );
};

Input.propTypes = {
  placeholder: P.node.isRequired,
  type: P.oneOf(['search', 'e-mail', 'text']),
};
