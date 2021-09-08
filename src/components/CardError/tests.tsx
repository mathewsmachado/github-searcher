import { theme } from 'styles/theme';
import { render, s } from 'utils/tests';

import { CardError } from '.';

it('should render all the items correctly', () => {
  render(<CardError text='Error!' />);

  expect(s.getByText(/error/i)).toBeInTheDocument();
  expect(s.getAllByTitle(/close/i)).toHaveLength(2);
});

it('should render the items spaced-between', () => {
  render(<CardError text='Error!' />, 'wrapper');

  expect(s.getByTestId(/wrapper/i).firstChild).toHaveStyle({
    justifyContent: 'space-between',
  });
});

it('should render the text centered below medium screens and hide the icons', () => {
  render(<CardError text='Error!' />, 'wrapper');

  expect(s.getByTestId(/wrapper/i).firstChild).toHaveStyleRule(
    'justify-content',
    'center',
    { media: theme.media.breakpoints('below', 'medium') }
  );
});

it('should reduce the text size below large screens', () => {
  render(<CardError text='Error!' />);

  expect(s.getByText(/error/i)).toHaveStyleRule(
    'font-size',
    theme.font.size.xlarge,
    { media: theme.media.breakpoints('below', 'large') }
  );
});
