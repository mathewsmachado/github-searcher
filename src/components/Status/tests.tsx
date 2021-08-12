import { render, screen } from 'utils/tests';

import { Status } from '.';

describe('<Status />', () => {
  it('should render a pink counter and a white label, both centralized by default', () => {
    render(<Status count={7} label='followers' />, 'wrapper');

    expect(screen.getByText(/7/i)).toBeInTheDocument();
    expect(screen.getByText(/followers/i)).toBeInTheDocument();
    expect(screen.getByTestId('wrapper').firstChild).toMatchSnapshot();
  });
});
