import { screen } from '@testing-library/react';
import { PageContainer } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';

describe('<PageContainer />', () => {
  it('should render <PageContainer /> correctly when isCentered is false', () => {
    const { container } = renderThemeProvider(
      <PageContainer isCentered={false}>
        <h1>Page container</h1>
      </PageContainer>,
    );
    expect(
      screen.getByRole('heading', { name: 'Page container' }),
    ).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle('align-items: flex-start');
  });

  it('should render <PageContainer /> correctly and match snapshot', () => {
    const { container } = renderThemeProvider(
      <PageContainer>
        <h1>Page container</h1>
      </PageContainer>,
    );
    expect(container.firstChild).toHaveStyle('align-items: center');
    expect(container.firstChild).toMatchSnapshot();
  });
});
