import { QuizzesContainer } from '.';
import { notAnsweredQuizzes, answeredQuizzes } from './mock';

import { renderThemeProvider } from './../../styles/render-theme-provider';
import { screen } from '@testing-library/react';

describe('<QuizzesContainer />', () => {
  it('should render <QuizzesContainer /> with unanswered quizzes correctly', () => {
    renderThemeProvider(<QuizzesContainer quizzes={notAnsweredQuizzes} />);
    expect(screen.getAllByRole('heading')).toHaveLength(
      notAnsweredQuizzes.length,
    );
  });

  it('should render <QuizzesContainer /> with answered quizzes correctly', () => {
    renderThemeProvider(<QuizzesContainer quizzes={answeredQuizzes} />);
    expect(screen.getAllByRole('heading')).toHaveLength(answeredQuizzes.length);
  });

  it('should match snapshot', () => {
    const { container } = renderThemeProvider(
      <QuizzesContainer quizzes={notAnsweredQuizzes} />,
    );
    expect(container).toMatchSnapshot();
  });
});
