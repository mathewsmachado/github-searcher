import { theme } from 'app/styles';
import { render, s } from 'app/utils/tests';

import { Spinner } from '.';

it('should render a xsmall version ', () => {
  render(<Spinner size='xsmall' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    width: '2rem',
    height: '2rem',
  });
});

it('should render a small version ', () => {
  render(<Spinner size='small' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    width: '4rem',
    height: '4rem',
  });
});

it('should render a medium version ', () => {
  render(<Spinner size='medium' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    width: '6rem',
    height: '6rem',
  });
});

it('should render a large version ', () => {
  render(<Spinner size='large' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    width: '8rem',
    height: '8rem',
  });
});

it('should render a xlarge version ', () => {
  render(<Spinner size='xlarge' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    width: '10rem',
    height: '10rem',
  });
});

it('should render a primary version ', () => {
  render(<Spinner color='primary' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    borderColor: theme.color.primary,
  });
});

it('should render a secondary version ', () => {
  render(<Spinner color='secondary' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    borderColor: theme.color.secondary,
  });
});

it('should render an accent version ', () => {
  render(<Spinner color='accent' />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyle({
    borderColor: theme.color.accent,
  });
});
