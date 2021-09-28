import { theme } from 'app/styles';
import { render, s } from 'app/utils/tests';

import { SecondaryHeading } from '.';

it('should render the passed children', () => {
  render(<SecondaryHeading>Look for people</SecondaryHeading>);

  expect(s.getByRole('heading')).toHaveTextContent(/look for people/i);
});

it('should render a huge title by default', () => {
  render(<SecondaryHeading>Look for people</SecondaryHeading>);

  expect(s.getByRole('heading')).toHaveStyle({
    fontSize: theme.font.size.huge,
  });
});

it('should render a xlarge title', () => {
  render(<SecondaryHeading size='xlarge'>Look for people</SecondaryHeading>);

  expect(s.getByRole('heading')).toHaveStyle({
    fontSize: theme.font.size.xlarge,
  });
});

it('should render a thin title', () => {
  render(<SecondaryHeading thin>Look for people</SecondaryHeading>);

  expect(s.getByRole('heading')).toHaveStyle({
    fontWeight: theme.font.weight.normal,
  });
});
