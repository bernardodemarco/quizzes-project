import * as actionTypes from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ACTIVATE_QUIZ: {
      return { ...state, isActive: true };
    }
    case actionTypes.FINISH_QUIZ: {
      return { ...state, isActive: false };
    }
    case actionTypes.SET_NUM_OF_QUESTIONS: {
      return { ...state, numOfQuestions: action.payload.numOfQuestions };
    }
    case actionTypes.INCREMENT_CORRECT_ANSWERS: {
      return { ...state, numOfCorrectAnswers: state.numOfCorrectAnswers + 1 };
    }
    case actionTypes.SET_QUESTIONS: {
      return { ...state, questions: action.payload.questions };
    }
    case actionTypes.GO_TO_NEXT_QUESTION: {
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    }
  }

  return { ...state };
};
