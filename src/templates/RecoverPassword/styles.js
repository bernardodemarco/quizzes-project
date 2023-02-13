import styled, { css } from 'styled-components';

import { Heading } from '../../components/Heading/styles';

export const Form = styled.form`
  ${({ theme }) => css`
    width: 55.2rem;
    height: 21.3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    ${Heading} {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 546px) {
      width: 100%;
      ${Heading} {
        font-size: ${theme.fonts.fontSizes.headings.large};
      }
    }

    @media (max-width: 361px) {
      ${Heading} {
        font-size: ${theme.fonts.fontSizes.headings.medium};
      }
    }
  `}
`;
