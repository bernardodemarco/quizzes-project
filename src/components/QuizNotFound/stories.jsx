import { QuizNotFound } from '.';

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
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <QuizNotFound {...args} />
  </div>
);
