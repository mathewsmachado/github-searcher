import { render, s } from 'utils/tests';

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
  const footer = s.getByRole('contentinfo');

  expect(wrapper.children).toHaveLength(3);
  expect(menu).toBeInTheDocument();
  expect(children.parentElement).toHaveStyle({ height: BaseContentHeight });
  expect(children).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
