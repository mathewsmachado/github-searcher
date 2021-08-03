import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { LineSeparator } from '.';

describe('<LineSeparator />', () => {
  it('should render a horizontal pink separator of regular thickness by default', () => {
    render(<LineSeparator data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveStyle({
      height: '0.6rem',
      backgroundColor: `${theme.color.accent}`,
    });
  });

  it('should render a separator of small thickness', () => {
    render(<LineSeparator thickness='thin' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveStyle({
      height: '0.4rem',
    });
  });

  it('should render a vertical separator', () => {
    render(<LineSeparator orientation='vertical' data-testid='separator' />);

    expect(screen.getByTestId('separator')).toHaveStyle({
      transform: 'rotate(90deg)',
    });
  });
});
