import { mapQuiz } from './mapQuiz';
import quizzes from './quizzes.json';

describe('mapQuiz', () => {
  it('should map quiz when no argument is passed in', () => {
    const quiz = mapQuiz();
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

  it('should map quiz when a raw quiz is passed as argument', () => {
    const rawQuiz = quizzes[0];
    const quiz = mapQuiz(rawQuiz);
    expect(quiz.id).toBe(rawQuiz.id);
    expect(quiz.title).toBe(rawQuiz.title);
    expect(quiz.search).toBe(rawQuiz.search);
    expect(quiz.shortDescription).toBe(rawQuiz.short_description);
    expect(quiz.description).toBe(rawQuiz.description);
    expect(quiz.date).toBe(rawQuiz.date);
    expect(quiz.imgSrc).toBe(rawQuiz.banner_image);
    expect(quiz.numOfQuestions).toBe(rawQuiz.questions_count);
    expect(quiz.difficulty).toBe(rawQuiz.difficulty);
    expect(quiz.isAnswered).toBe(rawQuiz.is_answered);
    expect(quiz.answeredDate).toBe(rawQuiz.answered_date);
    expect(quiz.numOfCorrectAnswers).toBe(rawQuiz.correct_answers_count);
  });
});
