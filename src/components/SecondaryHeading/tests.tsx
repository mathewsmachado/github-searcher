import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { title } from './mock';
import { SecondaryHeading } from '.';

describe('<SecondaryHeading />', () => {
  it('should render the passed children', () => {
    render(<SecondaryHeading>{title}</SecondaryHeading>);

    expect(screen.getByText(title)).toHaveTextContent(title);
  });

  it('should render a huge title by default', () => {
    render(<SecondaryHeading>{title}</SecondaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle(
      `font-size: ${theme.font.size.huge}`
    );
  });

  it('should render a xlarge title', () => {
    render(<SecondaryHeading size='xlarge'>{title}</SecondaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle(
      `font-size: ${theme.font.size.xlarge}`
    );
  });

  it('should render a thin title', async () => {
    render(<SecondaryHeading thin>{title}</SecondaryHeading>);

    expect(screen.getByRole('heading')).toHaveStyle(
      `font-weight: ${theme.font.weight.normal};`
    );
  });

  it('should ignore the "size" prop when the "thin" prop is passed', () => {
    render(
      <SecondaryHeading size='huge' thin>
        {title}
      </SecondaryHeading>
    );

    expect(screen.getByRole('heading')).toHaveStyle({
      fontSize: theme.font.size.xlarge,
      fontWeight: theme.font.weight.normal,
    });
  });
});
