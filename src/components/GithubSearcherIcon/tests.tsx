import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { GithubSearcherIcon } from '.';

describe('<GithubSearcherIcon />', () => {
  it('should render a black icon by default', () => {
    render(<GithubSearcherIcon />);
    const element = screen.getByTitle(/github searcher/i).parentElement;

    expect(element).toHaveStyle({ fill: theme.color.primary });
    expect(element?.nextSibling).toBe(null);
  });
});
