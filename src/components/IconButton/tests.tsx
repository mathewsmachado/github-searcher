import userEvent from '@testing-library/user-event';

import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';
import { Vs } from 'components/Vs';

import { IconButton } from '.';

describe('<IconButton />', () => {
  it('should render the passed children', () => {
    render(
      <IconButton onClick={() => {}}>
        <Vs color='secondary' />
      </IconButton>
    );

    expect(screen.getByTitle(/vs/i)).toBeInTheDocument();
  });

  it('should render a pink small button by default', () => {
    render(
      <IconButton onClick={() => {}}>
        <Vs color='secondary' />
      </IconButton>
    );

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: theme.color.accent,
      minWidth: '40px',
    });
  });

  it('should render a black button', () => {
    render(
      <IconButton onClick={() => {}} color='primary'>
        <Vs />
      </IconButton>
    );

    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: theme.color.primary,
    });
  });
  it('should render a medium button', () => {
    render(
      <IconButton onClick={() => {}} size='medium'>
        <Vs color='secondary' />
      </IconButton>
    );

    expect(screen.getByRole('button')).toHaveStyle({ minWidth: '52px' });
  });
  it('should render a large button', () => {
    render(
      <IconButton onClick={() => {}} size='large'>
        <Vs color='secondary' />
      </IconButton>
    );

    expect(screen.getByRole('button')).toHaveStyle({ minWidth: '64px' });
  });

  it('should render a minimal version of the button', () => {
    render(
      <IconButton onClick={() => {}} minimal>
        <Vs />
      </IconButton>
    );
    expect(screen.getByRole('button')).toHaveStyle({
      backgroundColor: 'transparent',
    });
    expect(screen.getByRole('button')).toHaveStyleRule(
      'background-color',
      'transparent',
      { modifier: ':hover' }
    );
    expect(screen.getByRole('button')).toHaveStyleRule(
      'background-color',
      'transparent',
      { modifier: ':disabled' }
    );
  });

  it('should change color on hover', () => {
    render(
      <IconButton onClick={() => {}} color='primary'>
        <Vs />
      </IconButton>
    );
    const blackButton = screen.getByRole('button');

    expect(blackButton).toHaveStyleRule(
      'background-color',
      theme.color.primary
    );
    expect(blackButton).toHaveStyleRule('background-color', 'rgba(0,0,0,0.9)', {
      modifier: ':hover',
    });

    render(
      <IconButton color='accent' onClick={() => {}}>
        <Vs color='secondary' />
      </IconButton>,
      'wrapper'
    );
    const pinkButton = screen.getByTestId(/wrapper/i).firstChild;

    expect(pinkButton).toHaveStyleRule('background-color', theme.color.accent);
    expect(pinkButton).toHaveStyleRule(
      'background-color',
      'rgba(255,0,127,0.9)',
      { modifier: ':hover' }
    );
  });

  it('should not change the color on hover when disabled', () => {
    render(
      <IconButton onClick={() => {}} color='primary' disabled>
        <Vs color='secondary' />
      </IconButton>
    );
    const blackButton = screen.getByRole('button');

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
      <IconButton onClick={() => {}} disabled>
        <Vs color='secondary' />
      </IconButton>,
      'wrapper'
    );
    const pinkButton = screen.getByTestId(/wrapper/i).firstChild;

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

    render(
      <IconButton onClick={handleClick}>
        <Vs color='secondary' />
      </IconButton>
    );
    const pinkButton = screen.getByRole('button');

    userEvent.click(pinkButton);
    expect(handleClick).toHaveBeenCalledTimes(1);

    userEvent.click(pinkButton);
    userEvent.click(pinkButton);
    expect(handleClick).toHaveBeenCalledTimes(3);

    const handleClickTwo = jest.fn();
    render(
      <IconButton color='primary' onClick={handleClickTwo} disabled>
        <Vs />
      </IconButton>,
      'wrapper'
    );
    const blackButton = screen.getByTestId(/wrapper/i)
      .firstChild as HTMLButtonElement;

    userEvent.click(blackButton);
    expect(handleClickTwo).toHaveBeenCalledTimes(0);

    userEvent.click(blackButton);
    userEvent.click(blackButton);
    expect(handleClickTwo).toHaveBeenCalledTimes(0);
  });
});
