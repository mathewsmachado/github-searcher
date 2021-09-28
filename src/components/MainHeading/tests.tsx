import { render, s } from 'app/utils/tests';

import { MainHeading } from '.';

it('should render all the items correctly', () => {
  render(<MainHeading unfilledText='hello' filledText='world' />, 'wrapper');

  expect(s.getByText(/hello/)).toBeInTheDocument();
  expect(s.getByText(/world/)).toBeInTheDocument();
});
