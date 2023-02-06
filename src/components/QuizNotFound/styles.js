import styled, { css } from 'styled-components';

import { Text as TextStyles } from './../TextComponent/styles';
import { Heading as HeadingStyles } from './../Heading/styles';

export const Container = styled.div`
  ${() => css`
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
      line-height: 2rem;
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 50rem;
  `}
`;