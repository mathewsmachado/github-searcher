import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { Vs } from '.';

describe('<Vs />', () => {
  it('should render a pink version by default', () => {
    render(<Vs />);

    expect(screen.getByTitle(/vs/i).parentElement).toHaveStyle({
      fill: theme.color.accent,
    });
  });

  it('should render a white version', () => {
    render(<Vs color='secondary' />);

    expect(screen.getByTitle(/vs/i).parentElement).toHaveStyle({
      fill: theme.color.secondary,
    });
  });
});
