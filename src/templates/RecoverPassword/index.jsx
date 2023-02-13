import * as Styled from './styles';

import { useNavigate } from 'react-router-dom';

import { PageContainer } from './../../components/PageContainer';
import { Heading } from './../../components/Heading';
import { Button } from './../../components/Button';
import { Input } from './../../components/Input';

export const RecoverPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <PageContainer>
      <Styled.Form onSubmit={handleSubmit}>
        <Heading fontSize="xLarge" lineHeight="58.8px">
          Recuperar senha
        </Heading>
        <Input placeholder="Digite seu endereço de e-mail" type="e-mail" />
        <Button type="submit" lineHeight="18px">
          Enviar e-mail
        </Button>
      </Styled.Form>
    </PageContainer>
  );
};
