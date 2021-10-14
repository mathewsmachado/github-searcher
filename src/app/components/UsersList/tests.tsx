import userEvent from '@testing-library/user-event';

import { render, s } from 'app/utils/tests';

import { UsersList } from '.';

it('should render all the items correctly', () => {
  render(
    <UsersList
      onArrowClick={() => {}}
      users={[
        { name: 'Mathews', username: 'mathewsmachado', pictureUrl: 'some-url' },
        { name: 'Machado', username: 'machadomathews', pictureUrl: 'some-url' },
      ]}
    />
  );

  expect(s.getAllByRole('img')).toHaveLength(2);
  expect(s.getAllByTitle(/right arrow/i)).toHaveLength(2);
});

it('should call the passed callback correctly', () => {
  const cb = jest.fn();

  render(
    <UsersList
      onArrowClick={cb}
      users={[
        { name: 'Machado', username: 'machadomathews', pictureUrl: 'some-url' },
      ]}
    />
  );
  const arrowButton = s.getByTitle(/right arrow/i);

  expect(cb).not.toBeCalled();

  userEvent.click(arrowButton);

  expect(cb).toBeCalledTimes(1);

  userEvent.click(arrowButton);
  userEvent.click(arrowButton);

  expect(cb).toBeCalledTimes(3);
});
