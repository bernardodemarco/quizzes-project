import { screen } from '@testing-library/react';
import { QuizDifficulty } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';

describe('<QuizDifficulty />', () => {
  it('should render <QuizDifficulty /> correctly', () => {
    renderThemeProvider(
      <QuizDifficulty backgroundColor="secondary">easy</QuizDifficulty>,
    );
    expect(screen.getByText('easy')).toBeInTheDocument();
  });

  it('should match inline snapshot', () => {
    const { container } = renderThemeProvider(
      <QuizDifficulty backgroundColor="secondary">easy</QuizDifficulty>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        position: absolute;
        bottom: 0.8rem;
        right: 1.6rem;
        padding: 0.4rem 1.6rem;
        border-radius: 1.2rem;
        color: #F2F2F2;
        background-color: #65AAEA;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 500;
      }

      <span
        class="c0"
      >
        easy
      </span>
    `);
  });
});
