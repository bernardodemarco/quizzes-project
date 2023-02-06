import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './../Input/styles';

export const PasswordInput = ({ placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleIconClick = () => {
    setIsVisible((visible) => !visible);
  };

  return (
    <Styled.Container>
      <Styled.Input
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
};

PasswordInput.propTypes = {
  placeholder: P.node.isRequired,
};
