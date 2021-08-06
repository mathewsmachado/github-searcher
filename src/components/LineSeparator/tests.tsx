import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { LineSeparator } from '.';

describe('<LineSeparator />', () => {
  it('should render a horizontal pink separator of bold thickness by default', () => {
    render(<LineSeparator />, 'wrapper');

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyle({
      height: '0.6rem',
      backgroundColor: theme.color.accent,
    });
  });

  it('should render a black separator', () => {
    render(<LineSeparator color='primary' />, 'wrapper');

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyle({
      backgroundColor: theme.color.primary,
    });
  });

  it('should render a separator of regular thickness', () => {
    render(<LineSeparator thickness='regular' />, 'wrapper');

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyle({
      height: '0.4rem',
    });
  });

  it('should render a separator of thin thickness', () => {
    render(<LineSeparator thickness='thin' />, 'wrapper');

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyle({
      height: '0.1rem',
    });
  });

  it('should render a vertical separator', () => {
    render(<LineSeparator orientation='vertical' />, 'wrapper');

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyle({
      transform: 'rotate(90deg)',
    });
  });
});
