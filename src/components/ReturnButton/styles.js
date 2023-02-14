import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;

    position: fixed;
    top: 3.6rem;
    left: 7.5rem;
    z-index: 2;

    &:hover {
      cursor: pointer;
    }

    @media ${theme.media.mediumDevices} {
      left: 5rem;
    }

    @media (max-width: 660px) {
      left: 1rem;
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    height: 100%;
  `}
`;
