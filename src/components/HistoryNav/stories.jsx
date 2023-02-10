import { HistoryNav } from '.';

const onClick = () => {
  console.log('clicked!');
};

export default {
  title: 'HistoryNav',
  component: HistoryNav,
  args: {
    onReturnButtonClick: onClick,
  },
};

export const Template = (args) => <HistoryNav {...args} />;
