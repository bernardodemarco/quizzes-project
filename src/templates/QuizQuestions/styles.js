import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    width: 55.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 10rem 0 12rem 0;
  `}
`;

export const TextContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  `}
`;

export const Image = styled.div`
  ${({ theme, imgSrc }) => css`
    overflow: hidden;

    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 0.8rem;
    width: 100%;
    height: 30.8rem;

    background-image: url(${imgSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;
