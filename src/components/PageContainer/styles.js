import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 100%;
    max-width: 114.6rem;
    min-height: 100vh;

    margin: 0 auto;
    overflow-x: hidden;

    display: flex;
    align-items: center;
  `}
`;
