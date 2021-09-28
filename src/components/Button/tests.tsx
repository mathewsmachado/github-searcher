import userEvent from '@testing-library/user-event';

import { theme } from 'app/styles';
import { render, s } from 'utils/tests';

import { Vs } from 'components/Vs';

import { Button } from '.';

it('should render the passed children', () => {
  render(
    <Button>
      <Vs color='secondary' />
    </Button>
  );

  expect(s.getByRole('button')).toBeInTheDocument();

  render(<Button>Search user</Button>);

  expect(s.getByText(/search/i)).toBeInTheDocument();
});

it('should render a pink small button by default', () => {
  render(<Button>Search User</Button>);

  expect(s.getByRole('button')).toHaveStyle({
    backgroundColor: theme.color.accent,
    width: '4rem',
  });
});

it('should render a medium button', () => {
  render(<Button size='medium'>Search User</Button>);

  expect(s.getByRole('button')).toHaveStyle({ width: '5.2rem' });
});

it('should render a large button', () => {
  render(<Button size='large'>Search User</Button>);

  expect(s.getByRole('button')).toHaveStyle({ width: '6.4rem' });
});

it('should render a black button', () => {
  render(<Button color='primary'>Search user</Button>);

  expect(s.getByRole('button')).toHaveStyle({
    backgroundColor: theme.color.primary,
  });
});

it('should change the box-shadow when active', () => {
  const defaultBoxShadow =
    'box-shadow: 0.2rem 0.4rem 0.4rem 0rem rgba(0,0,0,0.25)';

  render(<Button>Pink button</Button>);
  const pinkButton = s.getByText(/pink/i);

  expect(pinkButton).toHaveStyle(defaultBoxShadow);
  expect(pinkButton).toHaveStyleRule(
    'box-shadow',
    '0.2rem 0.4rem 0.8rem -0.2rem rgba(255,0,127,0.7)',
    { modifier: ':active' }
  );

  render(<Button color='primary'>Black button</Button>);
  const blackButton = s.getByText(/black/i);

  expect(blackButton).toHaveStyle(defaultBoxShadow);
  expect(blackButton).toHaveStyleRule(
    'box-shadow',
    '0.2rem 0.4rem 0.8rem -0.2rem rgba(0,0,0,0.7)',
    { modifier: ':active' }
  );
});

it('should render a minimal version of the button', () => {
  render(<Button minimal>Search User</Button>);

  expect(s.getByRole('button')).toHaveStyle({
    backgroundColor: 'transparent',
  });
});

it('should call the function passed to onClick prop when clicked', () => {
  const handleClickOne = jest.fn();

  render(<Button onClick={handleClickOne}>First Button</Button>);
  const buttonOne = s.getByRole('button');

  userEvent.click(buttonOne);
  expect(handleClickOne).toHaveBeenCalledTimes(1);

  userEvent.click(buttonOne);
  userEvent.click(buttonOne);
  expect(handleClickOne).toHaveBeenCalledTimes(3);

  const handleClickTwo = jest.fn();

  render(
    <Button onClick={handleClickTwo} disabled>
      Second Button
    </Button>
  );

  const buttonTwo = s.getByText(/second/i);

  userEvent.click(buttonTwo);
  expect(handleClickTwo).toHaveBeenCalledTimes(0);

  userEvent.click(buttonTwo);
  userEvent.click(buttonTwo);
  expect(handleClickTwo).toHaveBeenCalledTimes(0);
});
