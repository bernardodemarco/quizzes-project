import styled, { css } from 'styled-components';

import { Container as PageContainer } from '../PageContainer/styles';
import { Input, Container as InputContainer } from '../Input/styles';
import { Heading } from '../Heading/styles';

export const Button = styled.button`
  ${({ theme }) => css`
    display: none;

    z-index: 2;
    position: fixed;
    top: 3rem;
    right: 3rem;

    height: 4rem;
    width: 4rem;

    color: ${theme.colors.primary};
    background-color: ${theme.colors.lightGray};
    border: none;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 785px) {
      display: block;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme, isVisible }) => css`
    height: 12rem;

    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    border-bottom: 0.1rem solid ${theme.colors.gray};

    transition: all 300ms ease-in-out;

    & ${PageContainer} {
      min-height: initial;
      height: 100%;
    }

    @media (max-width: 1300px) {
      & ${PageContainer} {
        padding: 0 3rem;
      }
    }

    @media (max-width: 785px) {
      & {
        height: 100vh;
        bottom: 0;
        border-bottom: none;

        visibility: hidden;
        opacity: 0;
        ${
          isVisible &&
          css`
          visibility: visible;
          opacity: 1;
        `
        }
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 785px) {
      & {
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 7.5rem;
      }
    }
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    & ${Heading} {
      text-align: center;
    }

    @media (max-width: 1130px) {
      & ${Heading} {
        font-size: ${theme.fonts.fontSizes.headings.medium};
        margin-right: 2rem;
      }
    }

    @media ${theme.media.mediumDevices} {
      & ${Heading} {
        font-size: ${theme.fonts.fontSizes.headings.small};
      }
    }

    @media (max-width: 785px) {
      & {
        justify-content: center;
        align-items: center;
      }

      & ${Heading} {
        margin-right: 0;
      }
    }
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 3rem;

    & ${Input} {
      width: 40.4rem;
    }

    @media (max-width: 1130px) {
      & {
        align-items: center;
      }

      & ${Input} {
        width: 30rem;
      }
    }

    @media ${theme.media.mediumDevices} {
      & ${Input} {
        width: 22.5rem;
      }
    }

    @media (max-width: 785px) {
      & {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      & ${InputContainer}, & ${Input}, & .dropdown-button  {
        display: none;
      }
    }
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: block;
    text-align: center;
    color: ${theme.colors.dark};

    font-weight: ${theme.fonts.fontWeights.light};
    font-size: ${theme.fonts.fontSizes.paragraphs.large};
    line-height: 2.1rem;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 785px) {
      & {
        font-size: 1.8rem;
      }
    }
  `}
`;

export const Theme = styled.p`
  ${({ theme }) => css`
    display: none;
    color: ${theme.colors.dark};
    text-align: center;

    font-weight: ${theme.fonts.fontWeights.light};
    font-size: ${theme.fonts.fontSizes.paragraphs.large};
    line-height: 2.1rem;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 785px) {
      & {
        display: block;
        font-size: 1.8rem;
      }
    }
  `}
`;
