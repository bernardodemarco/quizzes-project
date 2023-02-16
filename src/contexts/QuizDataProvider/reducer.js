import * as actionTypes from './types';
import { data as initialData } from './data';

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
      return { ...state, questions: action.payload.questions, loading: false };
    }
    case actionTypes.GO_TO_NEXT_QUESTION: {
      if (state.currentQuestionIndex === state.numOfQuestions - 1) {
        return { ...state, isActive: false };
      }
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    }
    case actionTypes.RESTART_QUIZ: {
      return {
        ...state,
        ...initialData,
      };
    }
    case actionTypes.LOADING_QUESTIONS: {
      return { ...state, loading: true };
    }
  }

  return { ...state };
};
