import { QuizNotFound } from '.';
import { PageContainer } from './../PageContainer';

export default {
  title: 'QuizNotFound',
  component: QuizNotFound,
  args: {
    title: 'Quiz não encontrado',
    description:
      'Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...',
  },
  argTypes: {
    title: { type: 'string' },
    description: { type: 'string' },
  },
};

export const Template = (args) => (
  <PageContainer>
    <QuizNotFound {...args} />
  </PageContainer>
);
