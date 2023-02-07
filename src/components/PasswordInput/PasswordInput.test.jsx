import { fireEvent, screen } from '@testing-library/react';
import { PasswordInput } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';

describe('<PasswordInput />', () => {
  it('should render <PasswordInput /> correctly', () => {
    renderThemeProvider(<PasswordInput placeholder="placeholder" />);
    const input = screen.getByPlaceholderText('placeholder');
    const iconImg = input.nextSibling;

    expect(input).toHaveAttribute('required', '');
    expect(input).toHaveAttribute('type', 'password');
    expect(iconImg).toHaveAttribute(
      'src',
      'assets/images/show-password-icon.svg',
    );

    fireEvent.click(iconImg);

    expect(input).toHaveAttribute('type', 'text');
    expect(iconImg).toHaveAttribute(
      'src',
      'assets/images/hide-password-icon.svg',
    );

    fireEvent.click(iconImg);

    expect(input).toHaveAttribute('type', 'password');
    expect(iconImg).toHaveAttribute(
      'src',
      'assets/images/show-password-icon.svg',
    );
  });

  it('should match inline snapshot', () => {
    const { container } = renderThemeProvider(
      <PasswordInput placeholder="placeholder" />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        border: 0.1rem solid #BEBAB3;
        border-radius: 1.2rem;
        width: 100%;
        height: 100%;
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
        cursor: pointer;
      }

      <div
        class="c0"
      >
        <input
          class="c1"
          placeholder="placeholder"
          required=""
          type="password"
        />
        <img
          alt="show password icon"
          class="c2"
          src="assets/images/show-password-icon.svg"
        />
      </div>
    `);
  });
});
