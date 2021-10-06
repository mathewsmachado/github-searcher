import { render, s } from 'app/utils/tests';
import { theme } from 'app/styles';

import { BasePage } from '.';

it('should render correctly all the items', () => {
  render(
    <BasePage>
      <h1>Hello, World</h1>
    </BasePage>,
    'wrapper'
  );

  const wrapper = s.getByTestId(/wrapper/i);
  const menu = wrapper.firstChild;
  const children = s.getByText(/hello, world/i);
  const footer = s.getByRole('contentinfo');

  expect(wrapper.children).toHaveLength(3);
  expect(menu).toBeInTheDocument();
  expect(children).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

it('should change the padding according to the screen size', () => {
  render(
    <BasePage>
      <h1>Hello, World</h1>
    </BasePage>
  );

  const contentWrapper = s.getByText(/hello, world/i).parentElement;

  expect(contentWrapper).toHaveStyleRule(
    'padding',
    `${theme.spacing.medium} ${theme.spacing.xlarge}`
  );
  expect(contentWrapper).toHaveStyleRule(
    'padding',
    `${theme.spacing.medium} ${theme.spacing.medium}`,
    { media: theme.media.breakpoints('below', 'medium') }
  );
  expect(contentWrapper).toHaveStyleRule(
    'padding',
    `${theme.spacing.medium} ${theme.spacing.xxsmall}`,
    { media: theme.media.breakpoints('below', 'small') }
  );
});
