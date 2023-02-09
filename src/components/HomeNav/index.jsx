import P from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import { PageContainer } from '../PageContainer';
import { TextComponent } from '../TextComponent';
import { Heading } from '../Heading';
import { Input } from '../Input';

export const HomeNav = ({ userName }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Styled.Button
        aria-label="Open/Close menu"
        onClick={() => {
          setIsVisible((prevIsVisible) => !prevIsVisible);
        }}
      >
        {!isVisible && <MenuIcon aria-label="Open menu" />}
        {!!isVisible && <CloseIcon aria-label="Close menu" />}
      </Styled.Button>
      <Styled.Container
        isVisible={isVisible}
        onClick={() => setIsVisible(false)}
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
                {userName}
              </Heading>
            </Styled.Logo>
            <Styled.Nav>
              <Styled.Link>Histórico</Styled.Link>
              <Styled.Link className="dropdown-button">Temas</Styled.Link>
              <Styled.Theme className="mobile-quiz-search">#HTML</Styled.Theme>
              <Styled.Theme className="mobile-quiz-search">#UX</Styled.Theme>
              <Styled.Theme className="mobile-quiz-search">#Swift</Styled.Theme>
              <Styled.Theme className="mobile-quiz-search">#UI</Styled.Theme>
              <Input placeholder="Pesquisar quiz" />
            </Styled.Nav>
          </Styled.MenuContainer>
        </PageContainer>
      </Styled.Container>
    </>
  );
};

HomeNav.propTypes = {
  userName: P.string.isRequired,
};
