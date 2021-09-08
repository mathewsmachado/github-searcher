import { render, s } from 'utils/tests';

import { Card } from '.';

it('should render the passed children', () => {
  render(<Card>Github Searcher</Card>);

  expect(s.getByText(/github searcher/i)).toBeInTheDocument();
});

it('should render correctly', () => {
  render(<Card>Github Searcher</Card>, 'wrapper');

  expect(s.getByTestId(/wrapper/i).firstChild).toMatchInlineSnapshot(`
    .c0 {
      min-height: 10rem;
      padding: 1.6rem;
      background-color: #000000;
      border-radius: 1.2rem;
      -webkit-transition: all 0.1s ease-in-out;
      transition: all 0.1s ease-in-out;
    }

    .c0 > * {
      word-wrap: break-word;
    }

    .c0:hover {
      box-shadow: 0rem 1rem 1rem -0.5rem rgba(255,0,127,0.3);
    }

    .c0:active {
      box-shadow: 0rem 1.2rem 1rem -0.5rem rgba(255,0,127,0.5) inset;
    }

    <div
      class="c0"
    >
      Github Searcher
    </div>
  `);
});
