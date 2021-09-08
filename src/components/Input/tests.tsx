import { render, s } from 'utils/tests';

import { Input } from '.';

it('should render an input without the icon by default', () => {
  render(<Input placeholder='username' />);

  expect(s.getByPlaceholderText(/username/i)).toBeInTheDocument();
});

it('should render an input with the icon', () => {
  render(<Input icon />);

  expect(s.getByTitle(/icon/i)).toBeInTheDocument();
});

it('should render the error', () => {
  render(<Input error='No user was found' />, 'wrapper');

  expect(s.getByText(/user/i)).toHaveStyle({ color: 'red' });
  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    borderColor: 'red',
  });
});
