import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';

import { Button } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';
import { theme } from './../../styles/theme';

const {
  colors,
  fonts: {
    fontWeights,
    fontSizes: { buttons: btnFontSizes },
  },
} = theme;

describe('<Button />', () => {
  it('should render <Button /> correctly when all the props are passed in', () => {
    const handleClick = jest.fn();
    renderThemeProvider(
      <Button
        fontSize="small"
        fontWeight="light"
        onClick={handleClick}
        background={false}
        lineHeight="10px"
        type="submit"
      >
        Click here
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Click here' });

    userEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
    expect(button).toHaveStyle({
      'background-color': colors.white,
      color: colors.dark,
      'font-size': btnFontSizes.small,
      'font-weight': fontWeights.light,
      'line-height': '10px',
    });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should render <Button /> correctly with default props', () => {
    renderThemeProvider(<Button>Click here</Button>);
    const button = screen.getByRole('button', { name: 'Click here' });

    expect(button).toHaveStyle({
      'background-color': colors.primary,
      color: colors.white,
      'font-size': btnFontSizes.medium,
      'font-weight': fontWeights.normal,
    });
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should match inline snapshot', () => {
    const handleClick = jest.fn();
    const { container } = renderThemeProvider(
      <Button onClick={handleClick}>Click here</Button>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        background-color: #82327E;
        color: #FFFFFF;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: normal;
        font-family: inherit;
        width: 100%;
        height: 5.6rem;
        text-align: center;
        border: none;
        border-radius: 1.6rem;
        padding: 1.6rem 3.2rem;
      }

      .c0:hover {
        cursor: pointer;
      }

      <button
        class="c0"
        font-size="medium"
        font-weight="normal"
        type="button"
      >
        Click here
      </button>
    `);
  });
});
