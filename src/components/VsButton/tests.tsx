import { render, screen } from 'utils/tests';

import { VsButton } from '.';

it('should render correctly all the elements', () => {
  render(<VsButton />);

  expect(screen.getByTitle(/vs/i)).toBeInTheDocument();
  expect(screen.getByRole('button').firstChild).toHaveStyle({
    width: '100%',
    padding: ' 0.5rem 0.3rem 0',
  });
});
