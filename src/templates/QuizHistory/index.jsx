import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { HistoryNav } from '../../components/HistoryNav';
import { PageContainer } from '../../components/PageContainer';
import { QuizzesContainer } from '../../components/QuizzesContainer';

import { axiosConfig } from '../../utils/axiosConfig';
import { mapQuizzes } from './../../api/mapQuizzes';

export const QuizHistory = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        const quizzes = await axiosConfig.get('/quizzes?is_answered=true');
        !ignore && setQuizzes(mapQuizzes(quizzes.data));
      } catch {
        !ignore && setQuizzes(null);
      }
    };

    let ignore = false;
    loadQuizzes();

    return () => {
      ignore = true;
    };
  }, []);

  if (quizzes === null) {
    return <h1>Error</h1>;
  }

  if (quizzes.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <PageContainer isCentered={quizzes.length === 0}>
      <HistoryNav onReturnButtonClick={() => navigate('/')} />
      <QuizzesContainer quizzes={quizzes} />
    </PageContainer>
  );
};
