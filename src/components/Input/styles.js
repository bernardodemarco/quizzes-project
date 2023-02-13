import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 1.2rem;

    width: 100%;
    height: 5.3rem;
    padding: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 75%;
    border: none;
    font-family: inherit;
    font-weight: ${theme.fonts.fontWeights.light};
    font-size: ${theme.fonts.fontSizes.paragraphs.large};
    color: ${theme.colors.darkGray};
  `}
`;

export const Icon = styled.img`
  ${({ hover = false }) => css`
    width: 3rem;
    height: 2.5rem;

    &:hover {
      cursor: ${hover ? 'pointer' : 'default'};
    }
  `}
`;
