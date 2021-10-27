import userEvent from '@testing-library/user-event';

import { render, s } from 'app/utils/tests';

import { UsersList } from '.';

function mockUser(username: string) {
  return {
    username,
    name: 'Mathews Machado',
    bio: 'A passionate developer.',
    pictureUrl: 'some-url',
    fetchedAt: 2987654,
    socialMediaUsernames: { github: '0', linkedin: '0', twitter: '0' },
    statuses: { followers: 0, following: 0, repositories: 0 },
  };
}

it('should render all the items correctly', () => {
  render(
    <UsersList
      onArrowClick={() => () => {}}
      users={[mockUser('mathews'), mockUser('machado')]}
    />
  );

  expect(s.getAllByRole('img')).toHaveLength(2);
  expect(s.getAllByTitle(/right arrow/i)).toHaveLength(2);
});

it('should call the passed callback correctly', () => {
  const realCb = jest.fn();
  const cb = jest.fn().mockReturnValue(realCb);

  render(<UsersList onArrowClick={cb} users={[mockUser('mathews')]} />);
  const arrowButton = s.getByTitle(/right arrow/i);

  expect(realCb).not.toBeCalled();

  userEvent.click(arrowButton);

  expect(realCb).toBeCalledTimes(1);

  userEvent.click(arrowButton);
  userEvent.click(arrowButton);

  expect(realCb).toBeCalledTimes(3);
});
