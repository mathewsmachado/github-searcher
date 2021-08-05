import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { SecondaryHeading } from '.';

describe('<SecondaryHeading />', () => {
  it('should render the passed children', () => {
    render(<SecondaryHeading>Look for people</SecondaryHeading>);

    expect(screen.getByRole('heading')).toHaveTextContent(/look for people/i);
  });

  it('should render a huge title by default', () => {
    render(<SecondaryHeading>Look for people</SecondaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      fontSize: theme.font.size.huge,
    });
  });

  it('should render a xlarge title', () => {
    render(<SecondaryHeading size='xlarge'>Look for people</SecondaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      fontSize: theme.font.size.xlarge,
    });
  });

  it('should render a thin title', () => {
    render(<SecondaryHeading thin>Look for people</SecondaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      fontWeight: theme.font.weight.normal,
    });
  });
});
