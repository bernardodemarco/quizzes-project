import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ hasMarginTop }) => css`
    margin-top: ${hasMarginTop ? '16.8rem' : '0'};
    margin-bottom: 4.8rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 785px) {
      align-items: center;
      margin-top: 7.5rem;
    }
  `}
`;
