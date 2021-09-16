import userEvent from '@testing-library/user-event';

import { render, s } from 'utils/tests';

import { CardResult } from '.';

it('should render all the items correctly', () => {
  render(
    <CardResult
      name='Mathews'
      username='mathewsmachado'
      type='user'
      onArrowClick={() => {}}
    />
  );

  expect(s.getByRole('img')).toBeInTheDocument();
  expect(s.getByText(/Mathews/i)).toBeInTheDocument();
  expect(s.getByTitle(/right arrow/i)).toBeInTheDocument();
  expect(s.getByText(/passionate developer/i)).toBeInTheDocument();
  expect(s.queryByText(/mathewsmachado/i)).not.toBeInTheDocument();

  render(
    <CardResult
      name='jest'
      username='facebook'
      type='repo'
      onArrowClick={() => {}}
    />
  );

  expect(s.getAllByRole('img')).toHaveLength(2);
  expect(s.getByText(/jest/i)).toBeInTheDocument();
  expect(s.getByText(/facebook/i)).toBeInTheDocument();
  expect(s.getByText(/passionate tool/i)).toBeInTheDocument();
  expect(s.getByTitle(/vs/i)).toBeInTheDocument();
  expect(s.getAllByTitle(/right arrow/i)).toHaveLength(2);
});

it('should render the VsButton based on the passed type', () => {
  render(
    <CardResult
      name='Mathews'
      username='mathewsmachado'
      type='user'
      onArrowClick={() => {}}
    />
  );

  expect(s.queryByTitle(/vs/i)).not.toBeInTheDocument();

  render(
    <CardResult
      name='jest'
      username='facebook'
      type='repo'
      onArrowClick={() => {}}
    />
  );

  expect(s.queryByTitle(/vs/i)).toBeInTheDocument();
});

it('should call the passed callback correctly', () => {
  const cb = jest.fn();

  render(
    <CardResult
      name='Mathews'
      username='mathewsmachado'
      type='user'
      onArrowClick={cb}
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
