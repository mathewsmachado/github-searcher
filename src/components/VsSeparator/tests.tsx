import { theme } from 'app/styles';
import { render, s } from 'utils/tests';

import { VsSeparator } from '.';

it('should a vertical version by default', () => {
  render(<VsSeparator />, 'wrapper');
  const element = s.getByTestId('wrapper').firstChild;

  expect(element).toHaveProperty('id', 'vertical');
  expect(element).toHaveStyle({ fill: theme.color.accent });
});

it('should a horizontal version', () => {
  render(<VsSeparator orientation='horizontal' />, 'wrapper');
  const element = s.getByTestId('wrapper').firstChild;

  expect(element).toHaveProperty('id', 'horizontal');
  expect(element).toHaveStyle({ fill: theme.color.accent });
});
