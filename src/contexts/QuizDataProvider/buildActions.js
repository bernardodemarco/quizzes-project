import * as actionTypes from './types';

// import fakeQuestions from './../../templates/QuizQuestions/mock';
import { axiosConfig } from '../../utils/axiosConfig';
import { mapQuestions } from './../../api/mapQuestions';

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
    setQuestions: async (id) => {
      dispatch({ type: actionTypes.LOADING_QUESTIONS });

      const rawQuestions = await axiosConfig.get(`/questions/${id}`);
      const questions = mapQuestions(rawQuestions.data.data);

      return () => {
        dispatch({
          type: actionTypes.SET_QUESTIONS,
          payload: { questions: questions },
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
