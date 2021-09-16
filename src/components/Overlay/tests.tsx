import userEvent from '@testing-library/user-event';

import { theme } from 'styles/theme';
import { render, s } from 'utils/tests';

import { Overlay } from '.';

it('should render correctly', () => {
  render(<Overlay isVisible />, 'wrapper');
  const overlay = s.getByTestId(/wrapper/i).firstChild;

  expect(overlay).toHaveStyleRule('position', 'fixed');
  expect(overlay).toHaveStyleRule('inset', '0');
  expect(overlay).toHaveStyleRule('z-index', theme.layer.base.toString());
  expect(overlay).toHaveStyleRule('backdrop-filter', 'blur(0.1rem)');
});

it('should execute the passed callback when clicked', () => {
  const cb = jest.fn();

  render(<Overlay isVisible onClick={cb} />, 'wrapper');
  const overlay = s.getByTestId(/wrapper/i).firstChild as HTMLElement;

  expect(cb).not.toBeCalled();

  userEvent.click(overlay);

  expect(cb).toBeCalledTimes(1);

  userEvent.click(overlay);
  userEvent.click(overlay);

  expect(cb).toBeCalledTimes(3);
});
