// styles
import * as Styled from './styles';

// react-hooks
import { useEffect, useState } from 'react';

// components
import { HomeNav } from '../../components/HomeNav';
import { PageContainer } from '../../components/PageContainer';
import { QuizNotFound } from '../../components/QuizNotFound';
import { QuizzesContainer } from '../../components/QuizzesContainer';

// templates
import { Loading } from './../Loading';
import { PageNotFound } from './../PageNotFound';

// API
import { axiosConfig } from '../../utils/axiosConfig';
import { mapQuizzes } from './../../api/mapQuizzes';

export const Home = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [query, setQuery] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loadQuizzes = async () => {
      try {
        const requests = [
          axiosConfig.get('/quizzes?is_answered=false'),
          axiosConfig.get('/profile'),
        ];
        const [quizzes, profile] = await Promise.all(requests);
        !ignore && setUsername(profile.data.name);
        !ignore && setQuizzes(mapQuizzes(quizzes.data));
      } catch {
        !ignore && setUsername(null);
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

  if (quizzes === null || username === null) {
    return <PageNotFound />;
  }

  if (quizzes.length === 0 || username === '') {
    return <Loading />;
  }

  const filteredQuizzes = quizzes.filter((quiz) => {
    return quiz.search.includes(query.toLowerCase().trim());
  });

  return (
    <PageContainer isCentered={filteredQuizzes.length === 0}>
      <HomeNav
        username={username}
        onSearchInputChange={onSearchInputChange}
        onDropdownItemClick={onDropdownItemClick}
      />
      <Styled.Container hasMarginTop={filteredQuizzes.length > 0}>
        {filteredQuizzes.length > 0 ? (
          <QuizzesContainer
            quizzes={filteredQuizzes}
            numOfResults={
              !!query && filteredQuizzes.length > 0
                ? filteredQuizzes.length
                : null
            }
          />
        ) : (
          <QuizNotFound
            title="Quiz não encontrado"
            description="Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes..."
          />
        )}
      </Styled.Container>
    </PageContainer>
  );
};
