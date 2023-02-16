// react-hooks
import { useEffect, useState } from 'react';

// components
import { HomeNav } from '../../components/HomeNav';
import { PageContainer } from '../../components/PageContainer';
import { QuizNotFound } from '../../components/QuizNotFound';
import { QuizzesContainer } from '../../components/QuizzesContainer';

// API
import { axiosConfig } from '../../utils/axiosConfig';
import { mapQuizzes } from './../../api/mapQuizzes';

export const Home = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        const quizzes = await axiosConfig.get('/quizzes?is_answered=false');
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

  const onSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const onDropdownItemClick = (queryValue) => {
    setQuery(queryValue);
  };

  if (quizzes === null) {
    return <h1>not found</h1>;
  }

  if (quizzes.length === 0) {
    return <h1>Loading</h1>;
  }

  const filteredQuizzes = quizzes.filter((quiz) => {
    return quiz.search.includes(query.toLowerCase().trim());
  });

  return (
    <PageContainer isCentered={filteredQuizzes.length === 0}>
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
