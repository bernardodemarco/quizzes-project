import P from 'prop-types';
import * as Styled from './styles';

import { PageContainer } from '../PageContainer';
import { Heading } from '../Heading';
import { ReturnButton } from '../ReturnButton';

export const HistoryNav = ({ onReturnButtonClick }) => {
  return (
    <Styled.Nav>
      <ReturnButton onReturnButtonClick={onReturnButtonClick} />
      <PageContainer>
        <Heading fontSize="large" lineHeight="4.2rem">
          Seu histórico
        </Heading>
      </PageContainer>
    </Styled.Nav>
  );
};

HistoryNav.propTypes = {
  onReturnButtonClick: P.func.isRequired,
};
