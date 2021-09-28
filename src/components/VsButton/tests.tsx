import { render, s } from 'app/utils/tests';

import { VsButton } from '.';

it('should render correctly all the elements', () => {
  render(<VsButton />);

  expect(s.getByTitle(/vs/i)).toBeInTheDocument();
  expect(s.getByRole('button').firstChild).toHaveStyle({
    width: '100%',
    padding: ' 0.5rem 0.3rem 0',
  });
});
