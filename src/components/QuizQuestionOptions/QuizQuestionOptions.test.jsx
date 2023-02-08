import { renderThemeProvider } from './../../styles/render-theme-provider';
import { fireEvent, screen } from '@testing-library/react';

import { QuizQuestionOptions } from '.';
import data from './mock';

describe('<QuizQuestionOptions />', () => {
  it('should render <QuizQuestionOptions /> correctly', () => {
    const func = jest.fn();
    renderThemeProvider(<QuizQuestionOptions {...data} onButtonClick={func} />);

    expect(screen.getAllByRole('radio', { hidden: true })).toHaveLength(
      data.answers.length,
    );

    expect(
      screen.queryByRole('button', { name: 'Continuar' }),
    ).not.toBeInTheDocument();
  });

  it('should apply the correct styles when the wrong option has been chosen', () => {
    const func = jest.fn();
    renderThemeProvider(<QuizQuestionOptions {...data} onButtonClick={func} />);

    const radios = screen.getAllByRole('radio', { hidden: true });
    const optionWrappers = radios.map((radio) => {
      return radio.parentElement;
    });

    for (let radio of radios) {
      expect(radio).not.toHaveAttribute('disabled', '');
    }

    expect(
      screen.queryByRole('button', { name: 'Continuar' }),
    ).not.toBeInTheDocument();

    const selectedElement = optionWrappers[data.correctAnswerIndex - 1];
    const initialClassName = selectedElement.getAttribute('class');

    fireEvent.click(selectedElement);

    expect(selectedElement).toHaveAttribute(
      'class',
      initialClassName + ' wrong-answer',
    );

    for (let radio of radios) {
      expect(radio).toHaveAttribute('disabled', '');
    }

    expect(
      screen.queryByRole('button', { name: 'Continuar' }),
    ).toBeInTheDocument();

    // everything will remain the same when clicked again
    fireEvent.click(selectedElement);
    expect(
      screen.queryByRole('button', { name: 'Continuar' }),
    ).toBeInTheDocument();
  });

  it('should apply the correct styles when the correct option has been chosen', () => {
    const func = jest.fn();
    renderThemeProvider(<QuizQuestionOptions {...data} onButtonClick={func} />);

    const radios = screen.getAllByRole('radio', { hidden: true });
    const optionWrappers = radios.map((radio) => {
      return radio.parentElement;
    });

    const selectedElement = optionWrappers[data.correctAnswerIndex];
    const initialClassName = selectedElement.getAttribute('class');

    fireEvent.click(selectedElement);

    expect(selectedElement).toHaveAttribute(
      'class',
      initialClassName + ' correct-answer',
    );
  });

  it('should change class attribute in OptionWrapper if input or label were clicked', () => {
    const func = jest.fn();
    renderThemeProvider(<QuizQuestionOptions {...data} onButtonClick={func} />);

    const radios = screen.getAllByRole('radio', { hidden: true });

    // clicking on <label />
    const selectedElement =
      radios[data.correctAnswerIndex - 1].nextElementSibling;
    const affectedElement = selectedElement.parentElement;
    const initialClassName = affectedElement.getAttribute('class');

    fireEvent.click(selectedElement);

    expect(affectedElement).toHaveAttribute(
      'class',
      initialClassName + ' wrong-answer',
    );
  });

  it('should change class attribute in OptionWrapper if span was clicked', () => {
    const func = jest.fn();
    renderThemeProvider(<QuizQuestionOptions {...data} onButtonClick={func} />);

    const radios = screen.getAllByRole('radio', { hidden: true });

    // clicking on <span />
    const selectedElement =
      radios[data.correctAnswerIndex].nextSibling.firstChild;
    const affectedElement = selectedElement.parentElement.parentElement;
    const initialClassName = affectedElement.getAttribute('class');

    fireEvent.click(selectedElement);

    expect(affectedElement).toHaveAttribute(
      'class',
      initialClassName + ' correct-answer',
    );
  });

  it('should match snapshot', () => {
    const func = jest.fn();
    const { container } = renderThemeProvider(
      <QuizQuestionOptions {...data} onButtonClick={func} />,
    );
    expect(container).toMatchSnapshot();
  });
});
