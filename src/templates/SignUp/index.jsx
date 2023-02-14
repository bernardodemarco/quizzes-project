import * as Styled from './styles';

import { useNavigate } from 'react-router-dom';

import { useRef } from 'react';

import { useAuthContext } from './../../hooks/useAuthContext';

import { PageContainer } from './../../components/PageContainer';
import { Heading } from './../../components/Heading';
import { TextComponent } from './../../components/TextComponent';
import { Button } from './../../components/Button';
import { Input } from './../../components/Input';
import { PasswordInput } from './../../components/PasswordInput';

export const SignUp = () => {
  const navigate = useNavigate();

  const { signUp } = useAuthContext();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value,
    );
    navigate('/');
  };

  return (
    <PageContainer>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.TextContainer>
          <Heading fontSize="xLarge" lineHeight="58.8px">
            Cadastre-se
          </Heading>
          <TextComponent
            fontWeight="light"
            fontSize="large"
            lineHeight="26px"
            color="darkGray"
          >
            Crie uma conta gratuitamente
          </TextComponent>
        </Styled.TextContainer>
        <Input placeholder="Nome" type="text" ref={nameRef} />
        <Input placeholder="E-mail" type="e-mail" ref={emailRef} />
        <PasswordInput placeholder="Senha" ref={passwordRef} />
        <Button type="submit" lineHeight="18px">
          Cadastre-se
        </Button>
        <TextComponent
          lineHeight="18px"
          color="darkGray"
          fontSize="large"
          onClick={() => navigate('/login')}
        >
          Entrar
        </TextComponent>
      </Styled.Form>
    </PageContainer>
  );
};
