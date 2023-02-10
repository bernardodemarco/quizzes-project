import styled, { css } from 'styled-components';

import { Container as PageContainer } from './../PageContainer/styles';
import { ImageContainer as ReturnButton } from './../ReturnButton/styles';
import { Heading } from './../Heading/styles';

export const Nav = styled.nav`
  ${({ theme }) => css`
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    height: 12rem;
    border-bottom: 0.1rem solid ${theme.colors.gray};

    ${PageContainer} {
      min-height: initial;
      height: 100%;
      justify-content: flex-start;
      align-items: center;
    }

    ${Heading} {
      z-index: 1;
      position: fixed;
      left: 14.7rem;
    }

    @media ${theme.media.mediumDevices} {
      ${ReturnButton} {
        left: 5rem;
      }
    }

    @media ${theme.media.smallDevices} {
      ${Heading} {
        left: 12rem;
        font-size: ${theme.fonts.fontSizes.headings.medium};
      }
    }
  `}
`;
