import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { TextButton } from '.';

describe('<TextButton />', () => {
  it('should render a pink small button by default', () => {
    render(<TextButton>Search User</TextButton>);
    const textButton = screen.getByText(/search/i);

    expect(textButton).toHaveStyle({
      backgroundColor: theme.color.accent,
      fontSize: theme.font.size.small,
      padding: `2rem ${theme.spacing.large}`,
    });
  });

  it('should render a medium button', () => {
    render(<TextButton size='medium'>Search User</TextButton>);
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({ minWidth: '5.2rem' });
    expect(button).toHaveStyleRule('padding', `${theme.spacing.small} 8rem`);
  });

  it('should render a large button', () => {
    render(<TextButton size='large'>Search user</TextButton>);
    const button = screen.getByRole('button');

    expect(button).toHaveStyle({ minWidth: '6.4rem' });
    expect(button).toHaveStyleRule('padding', `${theme.spacing.medium} 11rem`);
  });
});