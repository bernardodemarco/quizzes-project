import styled, { css } from 'styled-components';

import { Heading } from '../../components/Heading/styles';
import { Text } from '../../components/TextComponent/styles';

export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 546px) {
      width: 100%;

      ${Heading} {
        font-size: ${theme.fonts.fontSizes.headings.large};
      }

      ${Text} {
        font-size: ${theme.fonts.fontSizes.paragraphs.medium};
      }
    }
  `}
`;

export const Form = styled.form`
  ${() => css`
    width: 55.2rem;
    height: 43.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (max-width: 546px) {
      width: 100%;
    }

    p:hover {
      cursor: pointer;
    }
  `}
`;
