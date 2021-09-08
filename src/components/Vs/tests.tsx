import { theme } from 'styles/theme';
import { render, s } from 'utils/tests';

import { Vs } from '.';

it('should render a pink version by default', () => {
  render(<Vs />);

  expect(s.getByTitle(/vs/i).parentElement).toHaveStyle({
    fill: theme.color.accent,
  });
});

it('should render a white version', () => {
  render(<Vs color='secondary' />);

  expect(s.getByTitle(/vs/i).parentElement).toHaveStyle({
    fill: theme.color.secondary,
  });
});
