import P from 'prop-types';
import * as Styled from './styles';

import { useState, useRef } from 'react';

import { Button } from '../Button';

import { useQuizDataContext } from '../../hooks/useQuizDataContext';

export const QuizQuestionOptions = ({ correctAnswerIndex, answers }) => {
  // finished state variable is a flag that controls if
  // the current question has finished or not
  const [finished, setFinished] = useState(false);

  // optionRef.current represents the selected option
  const optionRef = useRef(null);

  const actions = useQuizDataContext()[1];

  const alphabeticalOrder = 'ABCDE';

  const handleOptionClick = (e) => {
    optionRef.current = e.target;
    if (optionRef.current.id === 'options-container' || finished) return;

    // set selected option to be OptionWrapper, not RadioInput/Label/span
    if (
      optionRef.current.tagName === 'INPUT' ||
      optionRef.current.tagName === 'LABEL'
    ) {
      optionRef.current = optionRef.current.parentElement;
    } else if (optionRef.current.tagName === 'SPAN') {
      optionRef.current = optionRef.current.parentElement.parentElement;
    }

    // check if the answer is correct or incorrect
    if (parseInt(optionRef.current.id) === correctAnswerIndex) {
      optionRef.current.classList.add('correct-answer');
      actions.incrementCorrectAnswers();
    } else {
      optionRef.current.classList.add('wrong-answer');
    }
    setFinished(true);
  };

  const onButtonClick = () => {
    if (optionRef.current.classList.contains('correct-answer')) {
      optionRef.current.classList.remove('correct-answer');
    } else if (optionRef.current.classList.contains('wrong-answer')) {
      optionRef.current.classList.remove('wrong-answer');
    }
    setFinished(false);
    actions.goToNextQuestion();
  };

  return (
    <Styled.OptionsContainer
      id="options-container"
      onClick={handleOptionClick}
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
};
