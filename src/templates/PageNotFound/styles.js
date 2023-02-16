import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
  `}
`;
