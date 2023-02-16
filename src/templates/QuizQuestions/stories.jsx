import { useEffect } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { QuizQuestions } from '.';
import { AuthProvider } from '../../contexts/AuthProvider';
import { QuizDataProvider } from '../../contexts/QuizDataProvider';
import { useQuizDataContext } from '../../hooks/useQuizDataContext';

export default {
  title: 'QuizQuestions',
  component: QuizQuestions,
};

// the only purpose of this component is to make <QuizDescription />'s
// role activating the quiz and setting the number of questions,
// in order to work fine on storybook
const QuizDescriptionRole = ({ children }) => {
  const actions = useQuizDataContext()[1];

  useEffect(() => {
    actions.activateQuiz();
    actions.setNumOfQuestions(3);
  }, [actions]);

  return children;
};

export const Template = () => (
  <Router>
    <AuthProvider>
      <QuizDataProvider>
        <QuizDescriptionRole>
          <QuizQuestions />
        </QuizDescriptionRole>
      </QuizDataProvider>
    </AuthProvider>
  </Router>
);
