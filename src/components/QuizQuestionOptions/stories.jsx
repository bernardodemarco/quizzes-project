import { QuizQuestionOptions } from '.';
import { QuizDataProvider } from '../../contexts/QuizDataProvider';
import { PageContainer } from './../PageContainer';
import data from './mock';

export default {
  title: 'QuizQuestionOptions',
  component: QuizQuestionOptions,
  args: { ...data },
};

export const Template = (args) => (
  <PageContainer>
    <QuizDataProvider>
      <div style={{ width: '55.3rem' }}>
        <QuizQuestionOptions {...args} />
      </div>
    </QuizDataProvider>
  </PageContainer>
);
