import styled, { css } from 'styled-components';

import { Container as PageContainer } from './../../components/PageContainer/styles';
import { Heading } from './../../components/Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${PageContainer} {
      max-width: 120rem;
    }

    @media (max-width: 1065px) {
      ${PageContainer} {
        padding: 0 1rem;
      }
    }

    @media ${theme.media.mediumDevices} {
      ${PageContainer} {
        padding-top: 10rem;
        padding-bottom: 10rem;
      }
    }

    @media (max-width: 546px) {
      ${PageContainer} {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
      }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.2rem;
    align-items: last baseline;


    @media ${theme.media.mediumDevices} {
      grid-template-columns: 1fr;
    }

    @media (max-width: 546px) {
      width: 100%;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 41.8rem;
    height: 37.5rem;

    @media (max-width: 1065px) {
      width: 36.8rem;
      height: 32.5rem;
    }

    @media ${theme.media.mediumDevices} {
      margin: 0 auto;
    }

    @media (max-width: 546px) {
      width: 100%;
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    height: 100%;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 55.2rem;
    height: 36.2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    ${Heading} {
      margin-bottom: 0.5rem;
    }

    p:hover {
      cursor: pointer;
    }

    @media (max-width: 1065px) {
      width: 50.2rem;
      height: 31.2rem;
    }

    @media ${theme.media.mediumDevices} {
      ${Heading} {
        font-size: ${theme.fonts.fontSizes.headings.large};
        margin-bottom: 0;
      }
    }

    @media (max-width: 546px) {
      width: 100%;
    }
  `}
`;
