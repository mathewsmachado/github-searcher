import { render, s } from 'app/utils/tests';

import { Avatar } from '.';

it('should render the passed name, username, picture and about', () => {
  render(
    <Avatar
      type='user'
      name='Mathews'
      username='machado'
      about='Github Searcher creator'
    />
  );

  expect(s.getByText(/mathews/i)).toBeInTheDocument();
  expect(s.getByText(/machado/i)).toBeInTheDocument();
  expect(s.getByRole('img')).toBeInTheDocument();
  expect(s.getByText(/creator/i)).toBeInTheDocument();
});

it('should render a default about if not passed', () => {
  render(<Avatar type='user' name='Mathews' username='machado' />);

  expect(s.getByText(/passionate developer/i)).toBeInTheDocument();

  render(<Avatar name='Jest' username='facebook' type='repo' />);

  expect(s.getByText(/passionate tool/i)).toBeInTheDocument();
});

it('should render the avatar as a link', () => {
  render(
    <Avatar
      type='user'
      name='Mathews'
      username='machado'
      as='a'
      href='https://github.com/machado'
    />
  );
  const link = s.getByRole('link');

  expect(link).toHaveAttribute('href', 'https://github.com/machado');
  expect(link).toHaveStyle({ cursor: 'pointer' });
});

it('should not render the avatar username if the direction is "row" and type is "user"', () => {
  render(
    <Avatar type='user' name='Mathews' username='machado' direction='row' />
  );

  expect(s.queryByText(/mathews/i)).toBeInTheDocument();
  expect(s.queryByText(/machado/i)).not.toBeInTheDocument();
});

it('should render the avatar in column direction by default', () => {
  render(<Avatar type='user' name='Mathews' username='machado' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    flexDirection: 'column',
  });
});

it('should render the avatar in row direction ', () => {
  render(
    <Avatar type='user' name='Mathews' username='machado' direction='row' />,
    'wrapper'
  );

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    flexDirection: 'row',
  });
});
