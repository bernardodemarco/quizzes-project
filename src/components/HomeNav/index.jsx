import P from 'prop-types';
import * as Styled from './styles';

import { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { PageContainer } from '../PageContainer';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Dropdown } from '../Dropdown';

export const HomeNav = ({
  username,
  onSearchInputChange,
  onDropdownItemClick,
}) => {
  const navigate = useNavigate();

  const inputRef = useRef(null);

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownItemClick = (e) => {
    const queryValue = e.target.innerText.slice(1);
    onDropdownItemClick(queryValue);
    inputRef.current.value = queryValue;
  };

  return (
    <>
      <Styled.Button
        aria-label="Open/Close menu"
        onClick={() => {
          setIsNavVisible((prevIsVisible) => !prevIsVisible);
        }}
      >
        {!isNavVisible && <MenuIcon aria-label="Open menu" />}
        {!!isNavVisible && <CloseIcon aria-label="Close menu" />}
      </Styled.Button>
      <Styled.Container
        isVisible={isNavVisible}
        onClick={() => {
          setIsNavVisible(false);
          isDropdownVisible && setIsDropdownVisible(false);
        }}
      >
        <PageContainer>
          <Styled.MenuContainer>
            <Styled.Logo>
              <TextComponent
                fontSize="large"
                fontWeight="light"
                lineHeight="2.6rem"
              >
                Olá,
              </TextComponent>
              <Heading fontSize="large" fontWeight="bold" lineHeight="4.2rem">
                {username}
              </Heading>
            </Styled.Logo>
            <Styled.Nav aria-label="main menu">
              <Dropdown
                onDropdownItemClick={handleDropdownItemClick}
                isDropdownVisible={isDropdownVisible}
              />
              <Styled.Link onClick={() => navigate('/history')}>
                Histórico
              </Styled.Link>
              <Styled.Link
                as="span"
                className="dropdown-button"
                onClick={() => setIsDropdownVisible((isVisible) => !isVisible)}
              >
                Temas
              </Styled.Link>
              <Styled.Theme
                onClick={handleDropdownItemClick}
                className="mobile-quiz-search"
              >
                #HTML
              </Styled.Theme>
              <Styled.Theme
                onClick={handleDropdownItemClick}
                className="mobile-quiz-search"
              >
                #UX
              </Styled.Theme>
              <Styled.Theme
                onClick={handleDropdownItemClick}
                className="mobile-quiz-search"
              >
                #Swift
              </Styled.Theme>
              <Styled.Theme
                onClick={handleDropdownItemClick}
                className="mobile-quiz-search"
              >
                #UI
              </Styled.Theme>
              <Input
                onInputChange={onSearchInputChange}
                placeholder="Pesquisar quiz"
                ref={inputRef}
              />
            </Styled.Nav>
          </Styled.MenuContainer>
        </PageContainer>
      </Styled.Container>
    </>
  );
};

HomeNav.propTypes = {
  username: P.string.isRequired,
  onSearchInputChange: P.func,
  onDropdownItemClick: P.func,
};
