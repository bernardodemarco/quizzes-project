import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  ${({ theme, fontSize, fontWeight, lineHeight }) => css`
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.fontSizes.headings[fontSize]};
    font-weight: ${theme.fonts.fontWeights[fontWeight]};
    line-height: ${lineHeight};
  `}
`;
