import P from 'prop-types';
import * as Styled from './styles';

import { useState } from 'react';

import { Button } from '../Button';

export const QuizQuestionOptions = ({
  correctAnswerIndex,
  answers,
  onButtonClick,
}) => {
  // finished state variable is a flag that controls if
  // the current question has finished or not
  const [finished, setFinished] = useState(false);

  const alphabeticalOrder = 'ABCDE';

  const handleOptionClick = (e, correctAnswerIndex) => {
    let selectedOption = e.target;
    if (selectedOption.id === 'options-container' || finished) return;

    // set selectedOption to be OptionWrapper, not RadioInput/Label/span
    if (
      selectedOption.tagName === 'INPUT' ||
      selectedOption.tagName === 'LABEL'
    ) {
      selectedOption = selectedOption.parentElement;
    } else if (selectedOption.tagName === 'SPAN') {
      selectedOption = selectedOption.parentElement.parentElement;
    }

    // style selected answer
    if (parseInt(selectedOption.id) === correctAnswerIndex) {
      selectedOption.classList.add('correct-answer');
    } else {
      selectedOption.classList.add('wrong-answer');
    }
    setFinished(() => true);
  };

  return (
    <Styled.OptionsContainer
      id="options-container"
      onClick={(e) => handleOptionClick(e, correctAnswerIndex)}
      finished={finished}
    >
      {answers.map((answer, ind) => {
        return (
          <Styled.OptionWrapper key={ind} id={ind}>
            <Styled.RadioInput
              type="radio"
              name="quiz-option"
              id={`answer-${ind}`}
              disabled={finished}
            />
            <Styled.Label htmlFor={`answer-${ind}`}>
              <span>{`${alphabeticalOrder.at(ind)}.`}</span>
              <span>{`${answer}`}</span>
            </Styled.Label>
          </Styled.OptionWrapper>
        );
      })}
      {finished && <Button onClick={onButtonClick}>Continuar</Button>}
    </Styled.OptionsContainer>
  );
};

QuizQuestionOptions.propTypes = {
  correctAnswerIndex: P.number.isRequired,
  answers: P.arrayOf(P.string).isRequired,
  onButtonClick: P.func.isRequired,
};
