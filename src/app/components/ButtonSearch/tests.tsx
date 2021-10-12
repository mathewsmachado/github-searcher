import { theme } from 'app/styles';
import { render, s } from 'app/utils/tests';

import { ButtonSearch } from '.';

it('should render correctly', () => {
  render(<ButtonSearch />);

  expect(s.getByRole('button')).toHaveStyle({
    backgroundColor: theme.color.accent,
  });
  expect(s.getByTitle('magnifying glass icon')).toBeInTheDocument();
});
