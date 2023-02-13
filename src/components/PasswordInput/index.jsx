import P from 'prop-types';
import * as Styled from './../Input/styles';

import { useState } from 'react';
import { forwardRef } from 'react';

export const PasswordInput = forwardRef(function PasswordInput(
  { placeholder },
  ref,
) {
  const [isVisible, setIsVisible] = useState(false);
  const handleIconClick = () => {
    setIsVisible((visible) => !visible);
  };

  return (
    <Styled.Container>
      <Styled.Input
        ref={ref}
        placeholder={placeholder}
        type={isVisible ? 'text' : 'password'}
        required
      />
      <Styled.Icon
        src={
          isVisible
            ? 'assets/images/hide-password-icon.svg'
            : 'assets/images/show-password-icon.svg'
        }
        alt={isVisible ? 'hide password icon' : 'show password icon'}
        onClick={handleIconClick}
        hover={true}
      />
    </Styled.Container>
  );
});

PasswordInput.propTypes = {
  placeholder: P.node.isRequired,
};
