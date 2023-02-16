import * as actionTypes from './types';

import fakeQuestions from './../../templates/QuizQuestions/mock';

export const buildActions = (dispatch) => {
  return {
    activateQuiz: () => {
      dispatch({ type: actionTypes.ACTIVATE_QUIZ });
    },
    finishQuiz: () => {
      dispatch({ type: actionTypes.FINISH_QUIZ });
    },
    setNumOfQuestions: (numOfQuestions) => {
      dispatch({
        type: actionTypes.SET_NUM_OF_QUESTIONS,
        payload: { numOfQuestions },
      });
    },
    incrementCorrectAnswers: () => {
      dispatch({ type: actionTypes.INCREMENT_CORRECT_ANSWERS });
    },
    setQuestions: async () => {
      dispatch({ type: actionTypes.LOADING_QUESTIONS });

      return () => {
        dispatch({
          type: actionTypes.SET_QUESTIONS,
          payload: { questions: fakeQuestions },
        });
      };
    },
    goToNextQuestion: () => {
      dispatch({ type: actionTypes.GO_TO_NEXT_QUESTION });
    },
    restartQuiz: () => {
      dispatch({ type: actionTypes.RESTART_QUIZ });
    },
  };
};
