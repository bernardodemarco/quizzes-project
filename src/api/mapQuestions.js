export const mapQuestions = (questions = [{}]) => {
  return questions.map((question) => {
    const {
      id = '',
      correct_answer_index: correctAnswerIndex = 0,
      question_text: questionText = '',
      banner_image: imgSrc = '',
      answers = [],
    } = question;

    return {
      id,
      correctAnswerIndex,
      questionText,
      imgSrc,
      answers,
    };
  });
};
