import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { VsSeparator } from '.';

describe('<VsSeparator />', () => {
  it('should a vertical version by default', () => {
    render(<VsSeparator />, 'wrapper');
    const element = screen.getByTestId('wrapper').firstChild;

    expect(element).toHaveProperty('id', 'vertical');
    expect(element).toHaveStyle({ fill: theme.color.accent });
  });

  it('should a horizontal version', () => {
    render(<VsSeparator orientation='horizontal' />, 'wrapper');
    const element = screen.getByTestId('wrapper').firstChild;

    expect(element).toHaveProperty('id', 'horizontal');
    expect(element).toHaveStyle({ fill: theme.color.accent });
  });
});
