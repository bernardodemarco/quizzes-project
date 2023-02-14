import { useNavigate } from 'react-router-dom';

import { HistoryNav } from '../../components/HistoryNav';
import { PageContainer } from '../../components/PageContainer';
import { QuizzesContainer } from '../../components/QuizzesContainer';

import { answeredQuizzes } from '../../components/QuizzesContainer/mock';

export const QuizHistory = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HistoryNav onReturnButtonClick={() => navigate('/')} />
      <QuizzesContainer quizzes={answeredQuizzes} />
    </PageContainer>
  );
};
