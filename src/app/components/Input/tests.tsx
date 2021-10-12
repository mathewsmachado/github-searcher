import userEvent from '@testing-library/user-event';

import { render, s } from 'app/utils/tests';
import { Input } from '.';

it('should render an input without the icon by default', () => {
  render(<Input placeholder='username' />);

  expect(s.getByRole('textbox')).toHaveProperty('placeholder', 'username');
});

it('should render the error', () => {
  render(<Input error='No user was found' />);

  expect(s.getByText(/user/i)).toHaveStyle({ color: 'red' });
});

it('should display the typed text', () => {
  render(<Input />);
  const input = s.getByRole('textbox');

  userEvent.type(input, 'hello, world');

  expect(input).toHaveValue('hello, world');
});
