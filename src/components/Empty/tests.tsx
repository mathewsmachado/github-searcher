import { render, s } from 'utils/tests';

import { Empty } from '.';

it('should render all the items correctly', () => {
  render(<Empty text='hello, world' />, 'wrapper');

  expect(s.getByTestId(/wrapper/i).firstChild).toHaveStyle({
    justifyContent: 'space-between',
  });
  expect(s.getByTitle(/github searcher/i)).toBeInTheDocument();
  expect(s.getByText(/hello, world/i)).toBeInTheDocument();
});
