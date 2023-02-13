import { screen } from '@testing-library/react';
import { Input } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';

describe('<Input />', () => {
  it('should render search <Input /> correctly', () => {
    renderThemeProvider(<Input placeholder="placeholder" type="search" />);
    const input = screen.getByPlaceholderText('placeholder');
    expect(input).toHaveAttribute('type', 'search');
    expect(input).toHaveAttribute('required', '');
    expect(screen.getByAltText('search input icon')).toBeInTheDocument();
  });

  it('should render e-mail <Input /> correctly', () => {
    renderThemeProvider(<Input placeholder="placeholder" type="e-mail" />);
    const input = screen.getByPlaceholderText('placeholder');
    expect(input).toHaveAttribute('type', 'e-mail');
    expect(screen.getByAltText('e-mail input icon')).toBeInTheDocument();
  });

  it('should render text <Input /> correctly', () => {
    renderThemeProvider(<Input placeholder="placeholder" type="text" />);
    const input = screen.getByPlaceholderText('placeholder');
    expect(input).toHaveAttribute('type', 'text');
    expect(screen.getByAltText('text input icon')).toBeInTheDocument();
  });

  it('should render <Input /> correctly with default props', () => {
    renderThemeProvider(<Input placeholder="placeholder" />);
    const input = screen.getByPlaceholderText('placeholder');
    expect(input).toHaveAttribute('type', 'search');
    expect(screen.getByAltText('search input icon')).toBeInTheDocument();
  });

  it('should match inline snapshot', () => {
    const { container } = renderThemeProvider(
      <Input placeholder="placeholder" type="search" />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        border: 0.1rem solid #BEBAB3;
        border-radius: 1.2rem;
        width: 100%;
        height: 5.3rem;
        padding: 1.6rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c1 {
        width: 75%;
        border: none;
        font-family: inherit;
        font-weight: 400;
        font-size: 1.6rem;
        color: #78746D;
      }

      .c2 {
        width: 3rem;
        height: 2.5rem;
      }

      .c2:hover {
        cursor: default;
      }

      <div
        class="c0"
      >
        <input
          class="c1"
          placeholder="placeholder"
          required=""
          type="search"
        />
        <img
          alt="search input icon"
          class="c2"
          src="assets/images/search-icon.svg"
        />
      </div>
    `);
  });
});
