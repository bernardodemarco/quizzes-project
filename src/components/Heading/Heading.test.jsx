import { screen } from '@testing-library/react';

import { Heading } from '.';
import { renderThemeProvider } from '../../styles/render-theme-provider';
import { theme } from '../../styles/theme';

const fontSizes = theme.fonts.fontSizes.headings;
const fontWeights = theme.fonts.fontWeights;
const colors = theme.colors;

describe('<Heading />', () => {
  it('should render <Heading /> correctly when the props are passed in to it.', () => {
    renderThemeProvider(
      <Heading as="h4" fontSize="large" fontWeight="normal" lineHeight="10px">
        Hey there!
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: 'Hey there!' });
    expect(heading).toHaveStyle({
      color: colors.dark,
      'font-size': fontSizes.large,
      'font-weight': fontWeights.normal,
      'line-height': '10px',
    });
    expect(heading.tagName.toLowerCase()).toBe('h4');
  });

  it('should render <Heading /> correctly with default values', () => {
    renderThemeProvider(<Heading>Hey there!</Heading>);
    const heading = screen.getByRole('heading', { name: 'Hey there!' });
    expect(heading).toHaveStyle({
      'font-size': fontSizes.medium,
      'font-weight': fontWeights.bold,
    });
    expect(heading.tagName.toLowerCase()).toBe('h1');
  });

  it('should match inline snapshot', () => {
    const { container } = renderThemeProvider(<Heading>Hey there!</Heading>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        color: #3C3A36;
        font-size: 3.2rem;
        font-weight: 700;
        line-height: normal;
      }

      <h1
        class="c0"
        font-size="medium"
        font-weight="bold"
      >
        Hey there!
      </h1>
    `);
  });
});
