import { render, s } from 'utils/tests';

import { Status } from '.';

it('should render a pink counter and a white label, both centralized by default', () => {
  render(<Status count={7} label='followers' />, 'wrapper');

  expect(s.getByText(/7/i)).toBeInTheDocument();
  expect(s.getByText(/followers/i)).toBeInTheDocument();
  expect(s.getByTestId('wrapper').firstChild).toMatchInlineSnapshot(`
    .c0 {
      text-align: center;
    }

    .c1 {
      display: block;
      padding-bottom: 0.8rem;
      font-size: 2.8rem;
      font-weight: 800;
      color: #FF007F;
    }

    .c2 {
      font-size: 1.6rem;
      font-weight: 400;
      color: #FFFFFF;
    }

    <div
      class="c0"
    >
      <span
        class="c1"
      >
        7
      </span>
      <span
        class="c2"
      >
        followers
      </span>
    </div>
  `);
});
