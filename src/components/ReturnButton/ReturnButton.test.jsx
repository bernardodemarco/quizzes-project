import { fireEvent, screen } from '@testing-library/react';

import { ReturnButton } from '.';
import { renderThemeProvider } from './../../styles/render-theme-provider';

describe('<ReturnButton />', () => {
  it('should render <ReturnButton /> correctly and match inline snapshot', () => {
    const func = jest.fn();
    const { container } = renderThemeProvider(
      <ReturnButton onReturnButtonClick={func} />,
    );

    expect(screen.getByAltText('Return button')).toBeInTheDocument();

    fireEvent.click(container.firstChild);
    expect(func).toBeCalledTimes(1);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 4.8rem;
        height: 4.8rem;
        position: fixed;
        top: 3.6rem;
        left: 7.5rem;
        z-index: 2;
      }

      .c0:hover {
        cursor: pointer;
      }

      .c1 {
        width: 100%;
        height: 100%;
      }

      <div
        class="c0"
      >
        <img
          alt="Return button"
          class="c1"
          src="assets/images/back-icon.svg"
        />
      </div>
    `);
  });
});
