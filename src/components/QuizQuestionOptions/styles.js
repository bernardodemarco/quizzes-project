import styled, { css } from 'styled-components';
import { Button } from '../Button/styles';

export const OptionsContainer = styled.div`
  ${({ theme, finished }) => css`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    & .correct-answer, & .wrong-answer {
      background-color: ${theme.colors.lightGray};
    }

    & .correct-answer {
      border: 0.2rem solid ${theme.colors.success};
    }

    & .wrong-answer {
      border: 0.2rem solid ${theme.colors.error};
    }

    & div:hover,
    & div input:hover,
    & div label:hover,
    & div label span:hover {
      cursor: ${finished ? 'not-allowed' : 'pointer'}
    }

    & ${Button} {
      margin-top: 2rem;
      line-height: 1.8rem;
    }
  `}
`;

export const OptionWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 0.8rem;

    padding: 1.6rem 2.4rem;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    span {
      margin-right: 1.6rem;

      font-weight: ${theme.fonts.fontWeights.light};
      font-size: ${theme.fonts.fontSizes.paragraphs.large};
      line-height: 2.6rem;

      color: ${theme.colors.dark};
    }
  `}
`;

export const RadioInput = styled.input`
  ${() => css`
    visibility: hidden;
    width: 0;
    height: 0;
  `}
`;
