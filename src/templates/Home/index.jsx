// react-hooks
import { useState } from 'react';

// components
import { HomeNav } from '../../components/HomeNav';
import { PageContainer } from '../../components/PageContainer';
import { QuizNotFound } from '../../components/QuizNotFound';
import { QuizzesContainer } from '../../components/QuizzesContainer';

// mock-data
import { notAnsweredQuizzes } from '../../components/QuizzesContainer/mock';

export const Home = () => {
  // eslint-disable-next-line
  const [quizzes, setQuizzes] = useState(notAnsweredQuizzes);
  const [query, setQuery] = useState('');

  const onSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onDropdownItemClick = (queryValue) => {
    setQuery(queryValue);
  };

  const filteredQuizzes = quizzes.filter((quiz) => {
    return quiz.search.includes(query.toLowerCase().trim());
  });

  return (
    <PageContainer>
      <HomeNav
        username="bernardo"
        onSearchInputChange={onSearchInputChange}
        onDropdownItemClick={onDropdownItemClick}
      />
      {filteredQuizzes.length > 0 ? (
        <QuizzesContainer quizzes={filteredQuizzes} />
      ) : (
        <QuizNotFound
          title="Quiz não encontrado"
          description="Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes..."
        />
      )}
    </PageContainer>
  );
};
