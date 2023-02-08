import styled, { css } from 'styled-components';

export const ImageContainer = styled.div`
  ${() => css`
    width: 4.8rem;
    height: 4.8rem;

    position: fixed;
    top: 3.6rem;
    left: 7.5rem;
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    height: 100%;
  `}
`;
