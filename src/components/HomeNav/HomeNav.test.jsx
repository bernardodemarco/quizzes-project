import { fireEvent, screen } from '@testing-library/react';

import { HomeNav } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';

const username = 'username';

describe('<HomeNav />', () => {
  it('should render <HomeNav /> correctly and when clicking in "Temas", <Dropdown /> should appear', () => {
    renderThemeProvider(<HomeNav username={username} />);

    expect(screen.getByRole('heading', { name: username })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'main menu' }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Pesquisar quiz')).toBeInTheDocument();
    expect(screen.getByLabelText('Open/Close menu')).toHaveStyle({
      display: 'none',
    });

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    const dropdownBtn = screen.getByText('Temas');

    fireEvent.click(dropdownBtn);

    expect(screen.getByRole('list')).toHaveStyle({
      opacity: 1,
      visibility: 'visible',
    });

    fireEvent.click(screen.queryByRole('list').firstChild);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('when using mobile devices, it should apply the styles accordingly', () => {
    renderThemeProvider(<HomeNav username={username} />);

    const button = screen.getByLabelText('Open/Close menu');
    expect(button).toHaveStyleRule('display', 'block', {
      media: '(max-width: 785px)',
    });

    const menuContainer = button.nextSibling;
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: '(max-width: 785px)',
    });

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: '(max-width: 785px)',
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    const mobileSearchItem = screen.getAllByText('#UI')[1];

    fireEvent.click(mobileSearchItem);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: '(max-width: 785px)',
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderThemeProvider(<HomeNav username={username} />);
    expect(container).toMatchSnapshot();
  });
});
