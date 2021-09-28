import { theme } from 'app/styles';
import { render, s } from 'utils/tests';

import { Footer } from '.';

it('should render correctly all the items', () => {
  render(<Footer />);

  const text = s.getByText(/Mathews Machado, 20/i);
  const links = s.getAllByRole('link');

  expect(text).toBeInTheDocument();
  expect(links[0]).toHaveAttribute('href', expect.stringContaining('github'));
  expect(links[1]).toHaveAttribute('href', expect.stringContaining('linkedin'));
});

it('should render a black spaced-between footer', () => {
  render(<Footer />);
  const footer = s.getByRole('contentinfo');

  expect(footer).toHaveStyle({ backgroundColor: theme.color.primary });
  expect(footer).toHaveStyle({ justifyContent: 'space-between' });
});

it('should decrease the padding on small screens', () => {
  render(<Footer />);
  const footer = s.getByRole('contentinfo');

  expect(footer).toHaveStyleRule('padding', `0 ${theme.spacing.xxlarge}`);
  expect(footer).toHaveStyleRule('padding', '0 1rem', {
    media: theme.media.breakpoints('below', 'small'),
  });
});
