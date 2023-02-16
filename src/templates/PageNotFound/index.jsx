import * as Styled from './styles';

import { useNavigate } from 'react-router-dom';

import { Heading } from '../../components/Heading';
import { PageContainer } from '../../components/PageContainer';
import { TextComponent } from '../../components/TextComponent';
import { ReturnButton } from '../../components/ReturnButton';

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <ReturnButton onReturnButtonClick={() => navigate('/')} />
      <PageContainer>
        <Styled.Container>
          <Styled.Image
            src="/assets/images/not-found-icon.svg"
            alt="Page not found illustration"
          />
          <Heading fontSize="large" fontWeight="bold">
            Página não encontrada
          </Heading>
          <TextComponent fontSize="large" fontWeight="light" color="darkGray">
            Desculpe, nós não conseguimos carregar a página solicitada. Tente
            novamente mais tarde!
          </TextComponent>
        </Styled.Container>
      </PageContainer>
    </>
  );
};
