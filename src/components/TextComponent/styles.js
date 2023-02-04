import styled, { css } from 'styled-components';

export const Text = styled.p`
  ${({ theme, fontSize, fontWeight, color }) => css`
    font-size: ${theme.fonts.fontSizes.paragraphs[fontSize]};
    font-weight: ${theme.fonts.fontWeights[fontWeight]};
    color: ${theme.colors[color]};
  `}
`;
