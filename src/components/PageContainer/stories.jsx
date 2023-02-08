import { PageContainer } from '.';

export default {
  title: 'PageContainer',
  component: PageContainer,
  args: {
    children: <h1>Hey there!</h1>,
  },
};

export const Template = (args) => <PageContainer {...args} />;
