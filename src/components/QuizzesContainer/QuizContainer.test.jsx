import { QuizzesContainer } from '.';
import { notAnsweredQuizzes, answeredQuizzes } from './mock';

import { BrowserRouter as Router } from 'react-router-dom';
import { renderThemeProvider } from './../../styles/render-theme-provider';
import { fireEvent, screen } from '@testing-library/react';

describe('<QuizzesContainer />', () => {
  it('should render <QuizzesContainer /> with unanswered quizzes correctly', () => {
    renderThemeProvider(
      <Router>
        <QuizzesContainer quizzes={notAnsweredQuizzes} />
      </Router>,
    );
    expect(screen.getAllByRole('heading')).toHaveLength(
      notAnsweredQuizzes.length,
    );
    fireEvent.click(screen.getAllByRole('heading')[0]);
  });

  it('should render <QuizzesContainer /> with answered quizzes correctly', () => {
    renderThemeProvider(
      <Router>
        <QuizzesContainer quizzes={answeredQuizzes} />
      </Router>,
    );
    expect(screen.getAllByRole('heading')).toHaveLength(answeredQuizzes.length);
    fireEvent.click(screen.getAllByRole('heading')[0]);
  });

  it('should match snapshot', () => {
    const { container } = renderThemeProvider(
      <Router>
        <QuizzesContainer quizzes={notAnsweredQuizzes} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
