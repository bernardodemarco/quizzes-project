import { fireEvent, screen } from '@testing-library/react';
import { renderThemeProvider } from './../../styles/render-theme-provider';

import { Dropdown } from '.';

describe('<Dropdown />', () => {
  it('should render <Dropdown /> when isDropdownVisible is set to true', () => {
    const func = jest.fn();
    renderThemeProvider(
      <Dropdown isDropdownVisible={true} onDropdownItemClick={func} />,
    );

    const listItems = screen.getAllByRole('listitem');

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(listItems).toHaveLength(4);

    for (let listItem of listItems) {
      fireEvent.click(listItem);
    }

    expect(func).toBeCalledTimes(4);
  });

  it('should not render <Dropdown /> when isDropdownVisible is set to false', () => {
    const func = jest.fn();
    renderThemeProvider(
      <Dropdown isDropdownVisible={false} onDropdownItemClick={func} />,
    );

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const func = jest.fn();
    const { container } = renderThemeProvider(
      <Dropdown isDropdownVisible={true} onDropdownItemClick={func} />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
