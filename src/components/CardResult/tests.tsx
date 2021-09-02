import { render, screen } from 'utils/tests';

import { CardResult } from '.';

describe('<CardResult />', () => {
  it('should render all the items correctly', () => {
    render(<CardResult name='Mathews' username='mathewsmachado' type='user' />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/Mathews/i)).toBeInTheDocument();
    expect(screen.getByTitle(/right arrow/i)).toBeInTheDocument();
    expect(screen.getByText(/passionate developer/i)).toBeInTheDocument();
    expect(screen.queryByText(/mathewsmachado/i)).not.toBeInTheDocument();

    render(<CardResult name='jest' username='facebook' type='repo' />);

    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(screen.getByText(/jest/i)).toBeInTheDocument();
    expect(screen.getByText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByText(/passionate tool/i)).toBeInTheDocument();
    expect(screen.getByTitle(/vs/i)).toBeInTheDocument();
    expect(screen.getAllByTitle(/right arrow/i)).toHaveLength(2);
  });

  it('should render the VsButton based on the passed type', () => {
    render(<CardResult name='Mathews' username='mathewsmachado' type='user' />);

    expect(screen.queryByTitle(/vs/i)).not.toBeInTheDocument();

    render(<CardResult name='jest' username='facebook' type='repo' />);

    expect(screen.queryByTitle(/vs/i)).toBeInTheDocument();
  });
});
