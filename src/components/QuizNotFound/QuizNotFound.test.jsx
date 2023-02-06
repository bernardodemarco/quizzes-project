import { screen } from '@testing-library/react';
import { QuizNotFound } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';

describe('<QuizNotFound />', () => {
  it('should render <QuizNotFound /> correctly', () => {
    renderThemeProvider(
      <QuizNotFound title="title" description="description" />,
    );
    const image = screen.getByAltText('No quizzes have been found image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'assets/images/not-found-image.svg');

    expect(screen.getByRole('heading', { name: 'title' })).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
  });

  it('should match inline snapshot', () => {
    const { container } = renderThemeProvider(
      <QuizNotFound title="title" description="description" />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c5 {
        font-size: 1.4rem;
        font-weight: 400;
        color: #78746D;
        text-align: center;
      }

      .c3 {
        color: #3C3A36;
        font-size: 2rem;
        font-weight: 500;
      }

      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c0 .c2 {
        margin-top: 3.2rem;
        margin-bottom: 0.8rem;
        max-width: 75%;
      }

      .c0 .c4 {
        max-width: 65%;
        line-height: 2rem;
      }

      .c1 {
        width: 50rem;
      }

      <div
        class="c0"
      >
        <img
          alt="No quizzes have been found image"
          class="c1"
          src="assets/images/not-found-image.svg"
        />
        <h2
          class="c2 c3"
          font-size="xSmall"
          font-weight="normal"
        >
          title
        </h2>
        <p
          class="c4 c5"
          color="darkGray"
          font-size="medium"
          font-weight="light"
        >
          description
        </p>
      </div>
    `);
  });
});
