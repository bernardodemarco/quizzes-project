import { fireEvent, screen } from '@testing-library/react';

import { renderThemeProvider } from './../../styles/render-theme-provider';

import { HistoryNav } from '.';

describe('<HistoryNav />', () => {
  it('should render <HistoryNav /> correctly', () => {
    const func = jest.fn();
    renderThemeProvider(<HistoryNav onReturnButtonClick={func} />);

    expect(
      screen.getByRole('heading', { name: 'Seu histórico' }),
    ).toBeInTheDocument();

    const nav = screen.getByRole('navigation');
    const returnButton = nav.firstChild;

    expect(nav).toBeInTheDocument();

    fireEvent.click(returnButton);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const func = jest.fn();
    const { container } = renderThemeProvider(
      <HistoryNav onReturnButtonClick={func} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
