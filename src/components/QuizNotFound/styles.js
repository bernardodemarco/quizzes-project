import styled, { css } from 'styled-components';

import { Text as TextStyles } from './../TextComponent/styles';
import { Heading as HeadingStyles } from './../Heading/styles';

export const Container = styled.div`
  ${() => css`
    margin-top: 12rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    & ${HeadingStyles} {
      margin-top: 3.2rem;
      margin-bottom: 0.8rem;
      max-width: 75%;
    }

    & ${TextStyles} {
      max-width: 65%;
    }

    @media (max-width: 785px) {
      margin-top: 0;
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 50rem;
  `}
`;
