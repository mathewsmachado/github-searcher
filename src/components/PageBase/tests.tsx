import { render, s } from 'utils/tests';

import { PageBase, PageBaseContentHeight } from '.';

it('should render correctly all the items', () => {
  render(
    <PageBase>
      <h1>Hello, World</h1>
    </PageBase>,
    'wrapper'
  );

  const wrapper = s.getByTestId(/wrapper/i);
  const menu = wrapper.firstChild;
  const children = s.getByText(/hello, world/i);
  const footer = s.getByRole('contentinfo');

  expect(wrapper.children).toHaveLength(3);
  expect(menu).toBeInTheDocument();
  expect(children.parentElement).toHaveStyle({ height: PageBaseContentHeight });
  expect(children).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
