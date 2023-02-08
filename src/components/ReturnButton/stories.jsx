import { ReturnButton } from '.';
import { PageContainer } from './../PageContainer';

const onClick = () => {
  console.log('clicked!');
};

export default {
  title: 'ReturnButton',
  component: ReturnButton,
  args: {
    onReturnButtonClick: onClick,
  },
};

export const Template = (args) => (
  <PageContainer>
    <ReturnButton {...args} />
  </PageContainer>
);
