import { screen } from '@testing-library/react';

import { TextComponent } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';
import { theme } from './../../styles/theme';

const fontSizes = theme.fonts.fontSizes.paragraphs;
const fontWeights = theme.fonts.fontWeights;
const colors = theme.colors;

describe('<TextComponent />', () => {
  it('should render <TextComponent /> correctly when passing in props', () => {
    renderThemeProvider(
      <TextComponent fontSize="large" fontWeight="bold" color="success">
        Testing
      </TextComponent>,
    );
    const text = screen.getByText('Testing');
    expect(text).toHaveStyle({
      'font-size': fontSizes.large,
      'font-weight': fontWeights.bold,
      color: colors.success,
    });
  });

  it('should render <TextComponent /> correctly with default props values', () => {
    renderThemeProvider(<TextComponent>Testing</TextComponent>);
    const text = screen.getByText('Testing');
    expect(text).toHaveStyle({
      'font-size': fontSizes.medium,
      'font-weight': fontWeights.normal,
      color: colors.dark,
    });
  });

  it('should match inline snapshot', () => {
    const { container } = renderThemeProvider(
      <TextComponent>Testing</TextComponent>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.4rem;
        font-weight: 500;
        color: #3C3A36;
      }

      <p
        class="c0"
        color="dark"
        font-size="medium"
        font-weight="normal"
      >
        Testing
      </p>
    `);
  });
});
