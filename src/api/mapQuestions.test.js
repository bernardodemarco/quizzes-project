import { mapQuestions } from './mapQuestions';
import quizQuestions from './quizQuestions.json';

describe('mapQuestions', () => {
  it('should map questions when no argument is passed in', () => {
    const question = mapQuestions()[0];
    expect(question.id).toBe('');
    expect(question.correctAnswerIndex).toBe(0);
    expect(question.questionText).toBe('');
    expect(question.imgSrc).toBe('');
    expect(question.answers).toEqual([]);
  });

  it('should map questions correctly when a raw array of questions is passed in', () => {
    const rawQuestions = quizQuestions.data;
    const questions = mapQuestions(rawQuestions);
    expect(questions).toEqual([
      {
        id: rawQuestions[0].id,
        correctAnswerIndex: rawQuestions[0].correct_answer_index,
        questionText: rawQuestions[0].question_text,
        imgSrc: rawQuestions[0].banner_image,
        answers: rawQuestions[0].answers,
      },
      {
        id: rawQuestions[1].id,
        correctAnswerIndex: rawQuestions[1].correct_answer_index,
        questionText: rawQuestions[1].question_text,
        imgSrc: rawQuestions[1].banner_image,
        answers: rawQuestions[1].answers,
      },
      {
        id: rawQuestions[2].id,
        correctAnswerIndex: rawQuestions[2].correct_answer_index,
        questionText: rawQuestions[2].question_text,
        imgSrc: rawQuestions[2].banner_image,
        answers: rawQuestions[2].answers,
      },
    ]);
  });
});
