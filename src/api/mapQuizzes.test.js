import { mapQuizzes } from './mapQuizzes';
import rawQuizzes from './quizzes.json';

describe('mapQuizzes', () => {
  it('should map quizzes when no argument is passed in', () => {
    const quiz = mapQuizzes()[0];
    expect(quiz.id).toBe('');
    expect(quiz.title).toBe('');
    expect(quiz.search).toBe('');
    expect(quiz.shortDescription).toBe('');
    expect(quiz.description).toBe('');
    expect(quiz.date).toBe('');
    expect(quiz.imgSrc).toBe('');
    expect(quiz.numOfQuestions).toBe(0);
    expect(quiz.difficulty).toBe('');
    expect(quiz.isAnswered).toBe(false);
    expect(quiz.answeredDate).toBe('');
    expect(quiz.numOfCorrectAnswers).toBe(0);
  });

  it('should map quizzes when a raw array of quizzes is passed in as argument', () => {
    const quizzes = mapQuizzes(rawQuizzes);
    expect(quizzes).toEqual([
      {
        id: rawQuizzes[0].id,
        title: rawQuizzes[0].title,
        search: rawQuizzes[0].search,
        shortDescription: rawQuizzes[0].short_description,
        description: rawQuizzes[0].description,
        date: rawQuizzes[0].date,
        imgSrc: rawQuizzes[0].banner_image,
        numOfQuestions: rawQuizzes[0].questions_count,
        difficulty: rawQuizzes[0].difficulty,
        isAnswered: rawQuizzes[0].is_answered,
        answeredDate: rawQuizzes[0].answered_date,
        numOfCorrectAnswers: rawQuizzes[0].correct_answers_count,
      },
      {
        id: rawQuizzes[1].id,
        title: rawQuizzes[1].title,
        search: rawQuizzes[1].search,
        shortDescription: rawQuizzes[1].short_description,
        description: rawQuizzes[1].description,
        date: rawQuizzes[1].date,
        imgSrc: rawQuizzes[1].banner_image,
        numOfQuestions: rawQuizzes[1].questions_count,
        difficulty: rawQuizzes[1].difficulty,
        isAnswered: rawQuizzes[1].is_answered,
        answeredDate: rawQuizzes[1].answered_date,
        numOfCorrectAnswers: rawQuizzes[1].correct_answers_count,
      },
      {
        id: rawQuizzes[2].id,
        title: rawQuizzes[2].title,
        search: rawQuizzes[2].search,
        shortDescription: rawQuizzes[2].short_description,
        description: rawQuizzes[2].description,
        date: rawQuizzes[2].date,
        imgSrc: rawQuizzes[2].banner_image,
        numOfQuestions: rawQuizzes[2].questions_count,
        difficulty: rawQuizzes[2].difficulty,
        isAnswered: rawQuizzes[2].is_answered,
        answeredDate: rawQuizzes[2].answered_date,
        numOfCorrectAnswers: rawQuizzes[2].correct_answers_count,
      },
    ]);
  });
});
