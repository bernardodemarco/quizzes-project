import styled, { css } from 'styled-components';

export const Dropdown = styled.ul`
  ${({ theme, isVisible }) => css`
    visibility: hidden;
    opacity: 0;

    transition: all 300ms ease-in-out;

    ${
      isVisible &&
      css`
      visibility: visible;
      opacity: 1;
    `
    }

    position: absolute;
    top: 3rem;
    right: -4.5rem;

    width: 14.5rem;
    height: 15.2rem;

    background-color: ${theme.colors.white};
    border-radius: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    list-style: none;
  `}
`;

export const DropdownItem = styled.li`
  ${({ theme }) => css`
    width: 100%;

    padding: 1rem 4.5rem;

    border-bottom: 0.1rem solid ${theme.colors.gray};

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      cursor: pointer;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: #000000;

    text-align: center;

    font-size: ${theme.fonts.fontSizes.paragraphs.large};
    font-weight: ${theme.fonts.fontWeights.normal};
    line-height: 1.8rem;
  `}
`;
