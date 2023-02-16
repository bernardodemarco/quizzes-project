export const mapQuiz = (quiz = {}) => {
  const {
    id = '',
    title = '',
    search = '',
    short_description: shortDescription = '',
    description = '',
    date = '',
    banner_image: imgSrc = '',
    questions_count: numOfQuestions = 0,
    difficulty = '',
    is_answered: isAnswered = false,
    answered_date: answeredDate = '',
    correct_answers_count: numOfCorrectAnswers = 0,
  } = quiz;

  return {
    id,
    title,
    search,
    shortDescription,
    description,
    date,
    imgSrc,
    numOfQuestions,
    difficulty,
    isAnswered,
    answeredDate,
    numOfCorrectAnswers,
  };
};
