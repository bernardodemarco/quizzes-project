import P from 'prop-types';
import * as Styled from './styles';

import { forwardRef } from 'react';

const iconSrc = {
  search: 'assets/images/search-icon.svg',
  'e-mail': 'assets/images/email-icon.svg',
  text: 'assets/images/login-icon.svg',
};

export const Input = forwardRef(function Input(
  { placeholder, type = 'search', onInputChange },
  ref,
) {
  return (
    <Styled.Container>
      <Styled.Input
        onChange={onInputChange}
        type={type}
        placeholder={placeholder}
        ref={ref}
        required
      />
      {<Styled.Icon src={iconSrc[type]} alt={`${type} input icon`} />}
    </Styled.Container>
  );
});

Input.propTypes = {
  placeholder: P.node.isRequired,
  type: P.oneOf(['search', 'e-mail', 'text']),
  onInputChange: P.func,
};
