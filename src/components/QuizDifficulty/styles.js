import styled, { css } from 'styled-components';

export const Label = styled.span`
  ${({ theme, backgroundColor }) => css`
    position: absolute;
    bottom: 0.8rem;
    right: 1.6rem;

    padding: 0.4rem 1.6rem;
    border-radius: 1.2rem;

    color: #F2F2F2;
    background-color: ${theme.colors[backgroundColor]};

    text-transform: uppercase;
    font-size: ${theme.fonts.fontSizes.paragraphs.medium};
    font-weight: ${theme.fonts.fontWeights.normal};
  `}
`;
