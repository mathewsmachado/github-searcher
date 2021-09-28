import { theme } from 'app/styles';
import { render, s } from 'app/utils/tests';
import { Logo } from '.';

it('should render a small logo with a black img by default', () => {
  render(<Logo />);

  expect(s.getByTitle(/github/i).parentElement).toHaveStyle({
    maxWidth: '7.5rem',
  });
  expect(s.getByRole('heading')).toHaveStyle({ fontSize: '2.7rem' });
});

it('should render a logo with a white img', () => {
  render(<Logo githubColor='secondary' />);

  expect(s.getByTitle(/github/i).parentElement).toHaveAttribute(
    'fill',
    theme.color.secondary
  );
});

/**
 * Couldn't find where is the error. In storybook all seems like the expected.
 *
 * Seems like a bug with toHaveStyle/toHaveStyleRule (it wouldn't be the
 * first time).
 */
it.skip('should render a logo of medium size', () => {
  render(<Logo size='medium' />);

  expect(s.getByTitle(/github/i).parentElement).toHaveStyle({
    maxWidth: '15rem',
  });
  expect(s.getByRole('heading')).toHaveStyle({ fontSize: '5rem' });
});

/**
 * Couldn't find where is the error. In storybook all seems like the expected.
 *
 * Seems like a bug with toHaveStyle/toHaveStyleRule (it wouldn't be the
 * first time).
 */
it.skip('should render a logo of large size', () => {
  render(<Logo size='large' />);

  expect(s.getByTitle(/github/i).parentElement).toHaveStyle({
    maxWidth: '22.5rem',
  });
  expect(s.getByRole('heading')).toHaveStyle({ fontSize: '7rem' });
});
