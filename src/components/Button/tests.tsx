import userEvent from '@testing-library/user-event';

import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the passed children', () => {
    render(<Button onClick={() => {}}>Search user</Button>);

    expect(screen.getByRole('button')).toHaveTextContent(/search user/i);
  });

  it('should render a black large button by default', () => {
    render(<Button onClick={() => {}}>Search user</Button>);

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: theme.color.primary,
    });
  });

  it('should render a pink button', () => {
    render(
      <Button color='accent' onClick={() => {}}>
        Search user
      </Button>
    );

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: theme.color.accent,
    });
  });

  it('should render a medium button', () => {
    render(
      <Button size='medium' onClick={() => {}}>
        Search user
      </Button>
    );

    expect(screen.getByRole('button')).toHaveStyleRule(
      'padding',
      `${theme.spacing.small} 8rem`
    );
  });

  it('should render a small button', () => {
    render(
      <Button size='small' onClick={() => {}}>
        Search user
      </Button>
    );

    expect(screen.getByRole('button')).toHaveStyleRule(
      'padding',
      `2rem ${theme.spacing.large}`
    );
  });

  it('should change color on hover', () => {
    render(<Button onClick={() => {}}>Black button</Button>);
    const blackButton = screen.getByText(/black button/i);

    expect(blackButton).toHaveStyleRule(
      'background-color',
      theme.color.primary
    );
    expect(blackButton).toHaveStyleRule('background-color', 'rgba(0,0,0,0.9)', {
      modifier: ':hover',
    });

    render(
      <Button color='accent' onClick={() => {}}>
        Pink button
      </Button>
    );
    const pinkButton = screen.getByText(/pink button/i);

    expect(pinkButton).toHaveStyleRule('background-color', theme.color.accent);
    expect(pinkButton).toHaveStyleRule(
      'background-color',
      'rgba(255,0,127,0.9)',
      { modifier: ':hover' }
    );
  });

  it('should not change the color on hover when disabled', () => {
    render(
      <Button disabled onClick={() => {}}>
        Black button
      </Button>
    );
    const blackButton = screen.getByText(/black button/i);

    expect(blackButton).toHaveStyleRule(
      'background-color',
      theme.color.primary
    );
    expect(blackButton).toHaveStyleRule(
      'background-color',
      theme.color.primary,
      { modifier: ':disabled' }
    );
    expect(blackButton).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    });

    render(
      <Button disabled color='accent' onClick={() => {}}>
        Pink button
      </Button>
    );
    const pinkButton = screen.getByText(/pink button/i);

    expect(pinkButton).toHaveStyleRule('background-color', theme.color.accent);
    expect(pinkButton).toHaveStyleRule('background-color', theme.color.accent, {
      modifier: ':disabled',
    });
    expect(pinkButton).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    });
  });

  it('should call the function passed to onClick prop when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Search user</Button>);
    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    userEvent.click(button);
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
