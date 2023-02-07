import { fireEvent, screen } from '@testing-library/react';

import { QuizCard } from '.';
import { answeredQuiz, notAnsweredQuiz } from './mock';

import { theme } from '../../styles/theme';
import { renderThemeProvider } from './../../styles/render-theme-provider';

describe('<QuizCard />', () => {
  it('should render an answered <QuizCard /> correctly', () => {
    const testFunc = jest.fn();
    const { container } = renderThemeProvider(
      <QuizCard onClick={testFunc} {...answeredQuiz} />,
    );

    expect(
      screen.getByRole('heading', { name: answeredQuiz.title }),
    ).toBeInTheDocument();

    expect(screen.getByText(answeredQuiz.shortDescription)).toBeInTheDocument();

    expect(
      screen.getByText(`Em ${answeredQuiz.answeredDate}`),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        `Você acertou ${answeredQuiz.numOfCorrectAnswers} de ${answeredQuiz.numOfQuestions}`,
      ),
    ).toHaveStyle({
      color: theme.colors.error,
    });

    expect(screen.queryByText(answeredQuiz.difficulty)).not.toBeInTheDocument();

    expect(container.firstChild.firstChild).toHaveStyle({
      'background-image': `url(${answeredQuiz.imgSrc})`,
    });

    fireEvent.click(container.firstChild);
    expect(testFunc).toHaveBeenCalledTimes(1);
  });

  it('should render quiz feedback with the correct colors', () => {
    const testFunc = jest.fn();
    renderThemeProvider(
      <QuizCard
        onClick={testFunc}
        {...answeredQuiz}
        numOfCorrectAnswers={answeredQuiz.numOfQuestions}
      />,
    );
    expect(
      screen.getByText(
        `Você acertou ${answeredQuiz.numOfQuestions} de ${answeredQuiz.numOfQuestions}`,
      ),
    ).toHaveStyle({
      color: theme.colors.success,
    });
  });

  it('should render an unanswered <QuizCard /> correctly', () => {
    const testFunc = jest.fn();
    const { container } = renderThemeProvider(
      <QuizCard onClick={testFunc} {...notAnsweredQuiz} />,
    );

    expect(
      screen.getByRole('heading', { name: notAnsweredQuiz.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(notAnsweredQuiz.shortDescription),
    ).toBeInTheDocument();

    expect(screen.getByText(notAnsweredQuiz.difficulty)).toHaveStyle({
      'background-color': theme.colors.secondary,
    });

    expect(
      screen.queryByText(`Em ${notAnsweredQuiz.answeredDate}`),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(
        `Você acertou ${notAnsweredQuiz.numOfCorrectAnswers} de ${answeredQuiz.numOfQuestions}`,
      ),
    ).not.toBeInTheDocument();

    expect(container.firstChild.firstChild).toHaveStyle({
      'background-image': `url(${notAnsweredQuiz.imgSrc})`,
    });

    fireEvent.click(container.firstChild);
    expect(testFunc).toHaveBeenCalledTimes(1);
  });

  it('should render <QuizDifficulty /> with the right background-colors', () => {
    const testFunc = jest.fn();
    renderThemeProvider(
      <QuizCard onClick={testFunc} {...notAnsweredQuiz} difficulty="hard" />,
    );

    expect(screen.getByText('hard')).toHaveStyle({
      'background-color': theme.colors.error,
    });
  });

  it('should match snapshot', () => {
    const testFunc = jest.fn();
    const { container } = renderThemeProvider(
      <QuizCard onClick={testFunc} {...answeredQuiz} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
