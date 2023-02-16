import { fireEvent, screen } from '@testing-library/react';

import { HomeNav } from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderThemeProvider } from './../../styles/render-theme-provider';

const username = 'username';

describe('<HomeNav />', () => {
  it('should render <HomeNav /> correctly and when clicking in "Temas", <Dropdown /> should appear', () => {
    renderThemeProvider(
      <Router>
        <HomeNav username={username} />
      </Router>,
    );

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

    fireEvent.click(screen.getByRole('list'));

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should allow dropdown items to be clicked', () => {
    const func = jest.fn();
    renderThemeProvider(
      <Router>
        <HomeNav username={username} onDropdownItemClick={func} />
      </Router>,
    );

    fireEvent.click(screen.getByText('Temas'));

    const list = screen.getByRole('list');

    fireEvent.click(list.firstChild.firstChild);
  });

  it('when using mobile devices, it should apply the styles accordingly', () => {
    renderThemeProvider(
      <Router>
        <HomeNav username={username} />
      </Router>,
    );

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

    fireEvent.click(screen.getByRole('navigation'));

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: '(max-width: 785px)',
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderThemeProvider(
      <Router>
        <HomeNav username={username} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
