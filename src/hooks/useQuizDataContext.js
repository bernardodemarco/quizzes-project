import { useContext } from 'react';

import { QuizDataContext } from '../contexts/QuizDataProvider/context';

export const useQuizDataContext = () => {
  return useContext(QuizDataContext);
};
