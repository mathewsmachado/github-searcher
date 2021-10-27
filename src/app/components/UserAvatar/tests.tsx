import { render, s } from 'app/utils/tests';

import { UserAvatar } from '.';

const mockUser = {
  name: 'Mathews',
  username: 'machado',
  pictureUrl: 'some-url',
  bio: 'GitHub Searcher Creator',
};

it('should render the a large version by default', () => {
  render(<UserAvatar {...mockUser} />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    flexDirection: 'column',
  });
});

it('should render a small version ', () => {
  render(<UserAvatar {...mockUser} size='small' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    flexDirection: 'row',
  });
});

it('should render the passed name, username, picture and bio', () => {
  render(<UserAvatar {...mockUser} />);

  expect(s.getByText(/mathews/i)).toBeInTheDocument();
  expect(s.getByText(/machado/i)).toBeInTheDocument();
  expect(s.getByRole('img')).toBeInTheDocument();
  expect(s.getByText(/creator/i)).toBeInTheDocument();
});

it('should render the UserAvatar as a link', () => {
  render(
    <UserAvatar
      name='Mathews'
      username='machado'
      pictureUrl='some-url'
      href='https://github.com/mathewsmachado'
    />
  );

  expect(s.getByRole('link')).toHaveAttribute(
    'href',
    'https://github.com/mathewsmachado'
  );
});

it('should not render the username if the size is "small"', () => {
  render(
    <UserAvatar
      name='Mathews'
      username='machado'
      pictureUrl='some-url'
      size='small'
    />
  );

  expect(s.queryByText(/mathews/i)).toBeInTheDocument();
  expect(s.queryByText(/machado/i)).not.toBeInTheDocument();
});
