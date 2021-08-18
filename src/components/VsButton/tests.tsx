import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { VsButton } from '.';

describe('<VsButton />', () => {
  it('should render a normal version colors', () => {
    render(<VsButton />);
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      backgroundColor: theme.color.accent,
    });
    expect(button.firstChild).toHaveStyle({
      fill: theme.color.secondary,
    });
  });

  it('should render a minimal version colors', () => {
    render(<VsButton minimal />);
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({ background: 'transparent' });
    expect(button.firstChild).toHaveStyle({
      fill: theme.color.accent,
    });
  });
});
