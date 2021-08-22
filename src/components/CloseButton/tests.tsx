import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { CloseButton } from '.';

describe('<CloseButton />', () => {
  it('should render correctly the button children', () => {
    render(<CloseButton />);

    expect(screen.getByTitle(/close/i)).toBeInTheDocument();
  });

  it("should have the children with the same color if it's minimal and white otherwise", () => {
    render(<CloseButton color='accent' />, 'pink');
    render(<CloseButton color='accent' minimal />, 'pinkMinimal');
    render(<CloseButton color='primary' />, 'black');
    render(<CloseButton color='primary' minimal />, 'blackMinimal');
    const [pinkButton, pinkMinimalButton, blackButton, blackMinimalButton] =
      screen.getAllByRole('button');

    expect(pinkButton.firstChild).toHaveAttribute(
      'color',
      theme.color.secondary
    );
    expect(pinkMinimalButton.firstChild).toHaveAttribute(
      'color',
      theme.color.accent
    );
    expect(blackButton.firstChild).toHaveAttribute(
      'color',
      theme.color.secondary
    );
    expect(blackMinimalButton.firstChild).toHaveAttribute(
      'color',
      theme.color.primary
    );
  });
});