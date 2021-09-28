import userEvent from '@testing-library/user-event';

import { theme } from 'app/styles';
import { render, s } from 'utils/tests';

import { Menu } from '.';

it('should display correctly all the items', () => {
  render(<Menu />, 'wrapper');

  const menu = s.getByTestId(/wrapper/i).firstChild;
  const logo = s.getByTitle(/"github" word/i).parentElement;
  const openIcon = s.getByTitle(/open menu/i).parentElement;
  const openCloseWrapper = openIcon?.parentElement;
  const navItems = s
    .getAllByRole('link')
    .filter((item) => !item?.textContent!.includes('icon'));
  const socialMedia = s
    .getAllByRole('link', { name: /icon/i })
    .map((item) => item.textContent);

  expect(menu).toHaveStyle({ justifyContent: 'space-between' });
  expect(logo).toHaveAttribute('fill', theme.color.secondary);
  expect(openIcon).toHaveAttribute('color', theme.color.secondary);
  expect(openCloseWrapper).toHaveStyle({
    position: 'absolute',
    right: '4rem',
  });
  expect(navItems[0]).toHaveStyle({ marginRight: theme.spacing.medium });
  expect(navItems.map((item) => item.textContent)).toStrictEqual([
    'Search User',
    'Search Repo',
    'Repo Battle',
    'Contact Us',
  ]);

  expect(socialMedia).toStrictEqual(['github icon', 'linkedin icon']);
});

it('should change nav items color on hover', () => {
  render(<Menu />);
  const textLink = s.getByText(/search user/i);

  expect(textLink).toHaveStyle({ color: theme.color.secondary });
  expect(textLink).toHaveStyleRule('color', theme.color.accent, {
    modifier: ':hover',
  });
});

it('should display the open menu icon only below large screens', () => {
  render(<Menu />);

  const openIcon = s.getByTitle(/open menu/i).parentElement;
  const openCloseWrapper = openIcon!.parentElement;

  expect(openCloseWrapper).toHaveStyle({ opacity: 0 });
  expect(openCloseWrapper).toHaveStyleRule('opacity', '1', {
    media: theme.media.breakpoints('below', 'large'),
  });
});

it('should toggle the open/close icon if it is clicked', () => {
  render(<Menu />);
  /**
   * don't make sense to save the buttons into a variable because every time
   * they got clicked, they disappear and need to be queried again
   */
  expect(s.getByTitle(/open menu/i)).toBeInTheDocument();
  expect(s.queryByTitle(/close menu/i)).not.toBeInTheDocument();

  userEvent.click(s.getByTitle(/open menu/i));

  expect(s.getByTitle(/close menu/i)).toBeInTheDocument();
  expect(s.queryByTitle(/open menu/i)).not.toBeInTheDocument();

  userEvent.click(s.getByTitle(/close menu/i));

  expect(s.getByTitle(/open menu/i)).toBeInTheDocument();
  expect(s.queryByTitle(/close menu/i)).not.toBeInTheDocument();
});

it('should hide nav items if screen is below large and appear with it only after the open menu icon is clicked', () => {
  const media = theme.media.breakpoints('below', 'large');

  render(<Menu />);
  const rightSide = s.getByRole('navigation').parentElement;

  expect(rightSide).toHaveStyleRule('flex-direction', 'column', { media });
  expect(rightSide).toHaveStyleRule('position', 'absolute', { media });
  expect(rightSide).toHaveStyleRule('transform', 'translateX(100%)', { media });
  expect(rightSide).toHaveStyleRule('opacity', '0', { media });

  userEvent.click(s.getByTitle(/open menu/i));

  expect(rightSide).toHaveStyle({ transform: 'translateX(0%)' });
  expect(rightSide).toHaveStyle({ opacity: 1 });
});
