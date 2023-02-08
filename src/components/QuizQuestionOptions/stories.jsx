import { QuizQuestionOptions } from '.';
import { PageContainer } from './../PageContainer';
import data from './mock';

const onClick = () => {
  console.log('onButtonClick!');
};

export default {
  title: 'QuizQuestionOptions',
  component: QuizQuestionOptions,
  args: { ...data, onButtonClick: onClick },
};

export const Template = (args) => (
  <PageContainer>
    <div style={{ width: '55.3rem' }}>
      <QuizQuestionOptions {...args} />
    </div>
  </PageContainer>
);
