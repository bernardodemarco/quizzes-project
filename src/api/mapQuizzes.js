import { mapQuiz } from './mapQuiz';

export const mapQuizzes = (quizzes = [{}]) => {
  return quizzes.map((quiz) => {
    return mapQuiz(quiz);
  });
};
