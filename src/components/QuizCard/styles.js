import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    overflow: hidden;

    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 0.8rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    width: 55.2rem;
    height: fit-content;
    background-color: ${theme.colors.white};

    &:hover {
      cursor: pointer;
    }

    @media ${theme.media.largeDevices} {
      width: 45rem;
    }

    @media ${theme.media.mediumDevices} {
      width: 55.2rem;
    }

    @media ${theme.media.smallDevices} {
      width: 90vw;

      p {
        text-align: start;
      }
    }
  `}
`;

export const Image = styled.div`
  ${({ imgSrc }) => css`
    // position set to relative in order to position <QuizDifficulty /> accordingly
    position: relative;

    width: 100%;
    height: 19.4rem;

    background-image: url(${imgSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;

export const TextContainer = styled.div`
  ${() => css`
    width: 100%;
    padding: 1.6rem 1.6rem 0.8rem 1.6rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  `}
`;

export const FeedbackContainer = styled.div`
  ${() => css`
    width: 100%;

    display: flex;
    justify-content: space-between;
  `}
`;
