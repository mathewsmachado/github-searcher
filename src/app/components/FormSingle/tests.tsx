import userEvent from '@testing-library/user-event';
import { render, s } from 'app/utils/tests';

import { FormSingle } from '.';

it('should display correctly all the items', () => {
  render(
    <FormSingle inputData={{ placeholder: 'username' }} onSubmit={() => {}} />
  );

  expect(s.getByRole('form')).toHaveStyle({ width: '100%', display: 'flex' });
  expect(s.getByRole('textbox')).toBeInTheDocument();
  expect(s.getByRole('button')).toBeInTheDocument();
});

it('should call the passed callback on form submit', () => {
  const cb = jest.fn().mockImplementation((e) => e.preventDefault());

  render(<FormSingle inputData={{ placeholder: 'username' }} onSubmit={cb} />);

  const button = s.getByRole('button');

  expect(cb).not.toBeCalled();

  userEvent.click(button);
  userEvent.click(button);

  expect(cb).toBeCalledTimes(2);
});
