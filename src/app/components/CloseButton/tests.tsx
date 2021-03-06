import { theme } from 'app/styles';
import { render, s } from 'app/utils/tests';

import { CloseButton } from '.';

it('should render correctly the button children', () => {
  render(<CloseButton />);

  expect(s.getByTitle(/close/i)).toBeInTheDocument();
});

it("should have the children with the same color if it's minimal and white otherwise", () => {
  render(<CloseButton color='accent' />, 'pink');
  render(<CloseButton color='accent' minimal />, 'pinkMinimal');
  render(<CloseButton color='primary' />, 'black');
  render(<CloseButton color='primary' minimal />, 'blackMinimal');
  const [pinkButton, pinkMinimalButton, blackButton, blackMinimalButton] =
    s.getAllByRole('button');

  expect(pinkButton.firstChild).toHaveStyle({
    color: theme.color.secondary,
  });
  expect(pinkMinimalButton.firstChild).toHaveStyle({
    color: theme.color.accent,
  });
  expect(blackButton.firstChild).toHaveStyle({
    color: theme.color.secondary,
  });
  expect(blackMinimalButton.firstChild).toHaveStyle({
    color: theme.color.primary,
  });
});
