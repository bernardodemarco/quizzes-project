import * as Styled from './styles';

import { useNavigate } from 'react-router-dom';

import { PageContainer } from './../../components/PageContainer';
import { Heading } from './../../components/Heading';
import { TextComponent } from './../../components/TextComponent';
import { Button } from './../../components/Button';
import { Input } from './../../components/Input';
import { PasswordInput } from './../../components/PasswordInput';

export const SignUp = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Styled.Form>
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
        <Input placeholder="Nome" type="text" />
        <Input placeholder="E-mail" type="e-mail" />
        <PasswordInput placeholder="Senha" />
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
