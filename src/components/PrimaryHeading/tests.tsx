import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { PrimaryHeading } from '.';

it('should render the passed children', () => {
  render(<PrimaryHeading>GitHub Searcher</PrimaryHeading>);

  expect(screen.getByRole('heading')).toHaveTextContent(/github searcher/i);
});

it('should render a black title by default', () => {
  render(<PrimaryHeading>GitHub Searcher</PrimaryHeading>);

  expect(screen.getByRole('heading')).toHaveStyle({
    color: theme.color.primary,
  });
});

it('should render a pink title', () => {
  render(<PrimaryHeading color='accent'>GitHub Searcher</PrimaryHeading>);

  expect(screen.getByRole('heading')).toHaveStyle({
    color: theme.color.accent,
  });
});

it('should render a white title with a black border', async () => {
  render(<PrimaryHeading unfilled>GitHub Searcher</PrimaryHeading>);

  expect(screen.getByRole('heading')).toHaveStyle({
    color: theme.color.secondary,
  });
});

it('should ignore the "color" prop when the "unfilled" prop is passed', () => {
  render(
    <PrimaryHeading color='accent' unfilled>
      GitHub Searcher
    </PrimaryHeading>
  );

  expect(screen.getByRole('heading')).toHaveStyle({
    color: theme.color.secondary,
  });
});
