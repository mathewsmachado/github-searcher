import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should render a small logo with a black img by default', () => {
    render(<Logo />);

    expect(screen.getByTitle(/github/i).parentElement).toHaveStyle({
      maxWidth: '7.5rem',
    });
    expect(screen.getByRole('heading')).toHaveStyle({ fontSize: '2.7rem' });
  });

  it('should render a logo with a white img', () => {
    render(<Logo githubColor='secondary' />);

    expect(screen.getByTitle(/github/i).parentElement).toHaveAttribute(
      'fill',
      theme.color.secondary
    );
  });

  it('should render a logo of medium size', () => {
    render(<Logo size='medium' />);

    expect(screen.getByTitle(/github/i).parentElement).toHaveStyle({
      maxWidth: '15rem',
    });
    expect(screen.getByRole('heading')).toHaveStyle({ fontSize: '5rem' });
  });

  it('should render a logo of large size', () => {
    render(<Logo size='large' />);

    expect(screen.getByTitle(/github/i).parentElement).toHaveStyle({
      maxWidth: '22.5rem',
    });
    expect(screen.getByRole('heading')).toHaveStyle({ fontSize: '7rem' });
  });
});
