import { render, s } from 'utils/tests';
import { theme } from 'styles/theme';

import { Base, BaseContentHeight } from '.';

it('should render correctly all the items', () => {
  render(
    <Base>
      <h1>Hello, World</h1>
    </Base>,
    'wrapper'
  );

  const wrapper = s.getByTestId(/wrapper/i);
  const menu = wrapper.firstChild;
  const children = s.getByText(/hello, world/i);
  const contentWrapper = children.parentElement;
  const footer = s.getByRole('contentinfo');

  expect(wrapper.children).toHaveLength(3);
  expect(menu).toBeInTheDocument();
  expect(contentWrapper).toHaveStyle({ height: BaseContentHeight });
  expect(children).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

it('should change the padding according to the screen size', () => {
  render(
    <Base>
      <h1>Hello, World</h1>
    </Base>
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
