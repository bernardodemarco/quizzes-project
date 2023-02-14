import * as Styled from './styles';

import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuthContext } from './../../hooks/useAuthContext';

import { PageContainer } from '../../components/PageContainer';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Heading } from '../../components/Heading';
import { TextComponent } from '../../components/TextComponent';

export const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(emailRef.current.value, passwordRef.current.value);
    navigate('/');
  };

  return (
    <Styled.Container>
      <PageContainer>
        <Styled.Grid>
          <Styled.ImageContainer>
            <Styled.Image
              src="assets/images/login-image.svg"
              alt="Login image"
            />
          </Styled.ImageContainer>
          <Styled.Form onSubmit={handleSubmit}>
            <Heading fontSize="xLarge" lineHeight="58.8px">
              Entrar
            </Heading>
            <Input placeholder="E-mail" type="e-mail" ref={emailRef} />
            <PasswordInput placeholder="Password" ref={passwordRef} />
            <TextComponent
              lineHeight="18px"
              fontSize="large"
              onClick={() => navigate('/recover-password')}
            >
              Esqueceu sua senha?
            </TextComponent>
            <Button lineHeight="18px" type="submit">
              Entrar
            </Button>
            <TextComponent
              lineHeight="18px"
              fontSize="large"
              onClick={() => navigate('/sign-up')}
            >
              Criar uma conta
            </TextComponent>
          </Styled.Form>
        </Styled.Grid>
      </PageContainer>
    </Styled.Container>
  );
};
