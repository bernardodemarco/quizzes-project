import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 35.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7rem;
  `}
`;

export const TextContainer = styled.div`
  ${() => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    & h1 {
      margin-bottom: 3.2rem;
    }
  `}
`;
