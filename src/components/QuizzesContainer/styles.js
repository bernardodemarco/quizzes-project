import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    @media ${theme.media.largeDevices} {
      gap: 2rem;
    }

    @media ${theme.media.mediumDevices} {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  `}
`;
