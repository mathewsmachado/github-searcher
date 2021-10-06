import { theme } from 'app/styles';
import { render, s } from 'app/utils/tests';

import { PageTitle } from '.';

it('should render all the items correctly', () => {
  render(<PageTitle unfilledText='hello' filledText='world' />, 'wrapper');

  expect(s.getByText(/hello/)).toHaveStyle({
    color: theme.color.secondary,
    fontSize: '7rem',
  });
  expect(s.getByText(/world/)).toHaveStyle({
    color: theme.color.accent,
    fontSize: '7rem',
  });
});

it('should shrink below medium screens', () => {
  render(<PageTitle unfilledText='hello' filledText='world' />, 'wrapper');

  expect(s.getByText(/hello/)).toHaveStyleRule('font-size', '5rem', {
    media: theme.media.breakpoints('below', 'medium'),
  });
  expect(s.getByText(/world/)).toHaveStyleRule('font-size', '5rem', {
    media: theme.media.breakpoints('below', 'medium'),
  });
});
