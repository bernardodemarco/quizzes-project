import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, background, fontSize, fontWeight }) => css`
    background-color: ${background ? theme.colors.primary : theme.colors.white};
    color: ${background ? theme.colors.white : theme.colors.dark};
    font-size: ${theme.fonts.fontSizes.buttons[fontSize]};
    font-weight: ${theme.fonts.fontWeights[fontWeight]};

    font-family: inherit;
    width: 100%;
    text-align: center;
    border: none;
    border-radius: 1.6rem;
    padding: 1.6rem 3.2rem;

    &:hover {
      cursor: pointer;
    }
  `}
`;
