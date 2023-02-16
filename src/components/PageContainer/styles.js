import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ isCentered }) => css`
    width: 100%;
    max-width: 125rem;
    min-height: 100vh;

    margin: 0 auto;
    overflow-x: hidden;

    display: flex;
    align-items: ${isCentered ? 'center' : 'flex-start'};
    justify-content: center;
  `}
`;
