import { theme } from 'app/styles';
import { render, s } from 'app/utils/tests';

import { GithubSearcherIcon } from '.';

it('should render a black icon by default', () => {
  render(<GithubSearcherIcon />);
  const element = s.getByTitle(/github searcher/i).parentElement;

  expect(element).toHaveStyle({ fill: theme.color.primary });
  expect(element?.nextSibling).toBe(null);
});
