import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme, isAnswered, numOfResults }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    ${
      isAnswered &&
      css`
        margin-top: 16.8rem;
        margin-bottom: 4.8rem;
    `
    }

    ${
      !isAnswered &&
      numOfResults !== null &&
      css`
        margin-top: 2.5rem;
      `
    }

    @media ${theme.media.largeDevices} {
      gap: 2rem;
    }

    @media ${theme.media.mediumDevices} {
      grid-template-columns: 1fr;
      gap: 4rem;
    }

    ${
      !isAnswered &&
      css`
        @media (max-width: 785px) {
          margin-top: 5rem;
          margin-bottom: 5rem;
        }
      `
    }

  `}
`;
