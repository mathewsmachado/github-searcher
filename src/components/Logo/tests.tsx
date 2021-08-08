import { render, screen } from 'utils/tests';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should render a small logo with a black img by default', () => {
    render(<Logo />);

    expect(screen.getByRole('img')).toHaveStyle({ maxWidth: '7.5rem' });
    expect(screen.getByRole('heading')).toHaveStyle({ fontSize: '2.7rem' });
  });

  it('should render a logo with a white img', () => {
    render(<Logo githubColor='secondary' />);

    expect(screen.getByAltText(/white/i)).toBeInTheDocument();
  });

  it('should render a logo of medium size', () => {
    render(<Logo size='medium' />);

    expect(screen.getByRole('img')).toHaveStyleRule('max-width', '15rem');
    expect(screen.getByRole('heading')).toHaveStyle({ fontSize: '5rem' });
  });

  it('should render a logo of large size', () => {
    render(<Logo size='large' />);

    expect(screen.getByRole('img')).toHaveStyleRule('max-width', '22.5rem');
    expect(screen.getByRole('heading')).toHaveStyle({ fontSize: '7rem' });
  });
});
