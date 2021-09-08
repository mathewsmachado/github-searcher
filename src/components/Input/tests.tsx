import { render, screen } from 'utils/tests';

import { Input } from '.';

it('should render an input without the icon by default', () => {
  render(<Input placeholder='username' />);

  expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
});

it('should render an input with the icon', () => {
  render(<Input icon />);

  expect(screen.getByTitle(/icon/i)).toBeInTheDocument();
});

it('should render the error', () => {
  render(<Input error='No user was found' />, 'wrapper');

  expect(screen.getByText(/user/i)).toHaveStyle({ color: 'red' });
  expect(screen.getByTestId('wrapper').firstChild).toHaveStyle({
    borderColor: 'red',
  });
});
