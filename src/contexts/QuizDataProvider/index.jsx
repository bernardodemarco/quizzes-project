import P from 'prop-types';

import { useReducer, useRef } from 'react';

import { QuizDataContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import { buildActions } from './buildActions';

export const QuizDataProvider = ({ children }) => {
  const [quizData, dispatch] = useReducer(reducer, data);
  const actions = useRef(buildActions(dispatch));
  return (
    <QuizDataContext.Provider value={[quizData, actions.current]}>
      {children}
    </QuizDataContext.Provider>
  );
};

QuizDataProvider.propTypes = {
  children: P.node.isRequired,
};
