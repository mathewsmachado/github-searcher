import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { title } from './mock';
import { PrimaryHeading } from '.';

describe('<PrimaryHeading />', () => {
  it('should render the passed children', () => {
    render(<PrimaryHeading>{title}</PrimaryHeading>);

    expect(screen.getByText(title)).toHaveTextContent(title);
  });

  it('should render a black title by default', () => {
    render(<PrimaryHeading>{title}</PrimaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      color: theme.color.primary,
    });
  });

  it('should render a pink title', () => {
    render(<PrimaryHeading color='accent'>{title}</PrimaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      color: theme.color.accent,
    });
  });

  it('should render a white title with a black border', async () => {
    render(<PrimaryHeading unfilled>{title}</PrimaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle({
      color: theme.color.secondary,
    });
  });

  it('should ignore the "color" prop when the "unfilled" prop is passed', () => {
    render(
      <PrimaryHeading color='accent' unfilled>
        {title}
      </PrimaryHeading>
    );

    expect(screen.getByRole('heading')).toHaveStyle({
      color: theme.color.secondary,
    });
  });
});
