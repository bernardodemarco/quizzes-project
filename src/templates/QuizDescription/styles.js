import styled, { css } from 'styled-components';

import { Button } from '../../components/Button/styles';
import { Text } from '../../components/TextComponent/styles';
import { Label as QuizDifficulty } from '../../components/QuizDifficulty/styles';

export const Container = styled.div`
  ${() => css`
    margin-top: 12rem;
    margin-bottom: 12.3rem;

    width: 55.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    ${Button} {
      margin-top: 1rem;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;

    ${QuizDifficulty} {
      position: static;
      display: block;
      text-align: center;

      width: 7.2rem;
      height: 2.4rem;
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
  `}
`;

export const TextContainer = styled.div`
  ${() => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    ${Text} {
      text-align: left;
    }
  `}
`;
