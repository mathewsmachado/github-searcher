import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { GithubSearcherIcon } from '.';

describe('<GithubSearcherIcon />', () => {
  it('should render a black icon without a line separator by default', () => {
    render(<GithubSearcherIcon />, 'wrapper');
    const element = screen.getByTestId('wrapper').firstChild;

    expect(element?.firstChild).toHaveAttribute('fill', theme.color.primary);
    expect(element?.firstChild).toBe(element?.lastChild);
  });

  it('should render an icon with a line separator on the side', () => {
    render(<GithubSearcherIcon separator />, 'wrapper');
    const element = screen.getByTestId('wrapper').firstChild;

    expect(element?.lastChild).toHaveAttribute('color', 'primary');
    expect(element?.lastChild).not.toBe(element?.firstChild);
  });
});
