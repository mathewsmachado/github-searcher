import { render, screen } from 'utils/tests';

import { ModalResult } from '.';

it('should render a version with only one modal', () => {
  render(
    <ModalResult
      isOpen
      onClose={() => {}}
      type='single'
      modalOneContent={{
        name: 'mathews',
        type: 'user',
        statuses: { followers: 1, following: 1, repositories: 1 },
        username: 'mathewsmachado',
      }}
    />,
    'wrapper'
  );

  const overlay = screen.getByTestId(/wrapper/i).firstChild?.firstChild;
  const avatar = screen.getByRole('img');
  const status = screen.getByText(/following/i);
  const socialMediaIcons = screen.getByTitle(/github icon/i);

  expect(overlay).toBeInTheDocument();
  expect(avatar).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(socialMediaIcons).toBeInTheDocument();
});

it('should render a version with two modals', () => {
  render(
    <ModalResult
      isOpen
      onClose={() => {}}
      type='double'
      modalOneContent={{
        name: 'tl',
        type: 'repo',
        statuses: { forks: 1, issues: 1, stars: 1 },
        username: 'mathewsmachado',
      }}
      modalTwoContent={{
        name: 'jest',
        type: 'repo',
        statuses: { forks: 1, issues: 1, stars: 1 },
        username: 'facebook',
      }}
    />,
    'wrapper'
  );

  const overlay = screen.getByTestId(/wrapper/i).firstChild?.firstChild;
  const avatars = screen.getAllByRole('img');
  const statuses = screen.getAllByText(/forks/i);
  const socialMediaIcons = screen.getAllByTitle(/github icon/i);
  const vsSeparator = screen.getByTitle(/vs/i);

  expect(overlay!.childNodes).toHaveLength(3);
  expect(avatars).toHaveLength(2);
  expect(statuses).toHaveLength(2);
  expect(socialMediaIcons).toHaveLength(2);
  expect(vsSeparator).toBeInTheDocument();
});

it('should build the github link depending if it is a user or a repo', () => {
  render(
    <ModalResult
      isOpen
      onClose={() => {}}
      type='single'
      modalOneContent={{
        name: 'mathews',
        type: 'user',
        statuses: { followers: 1, following: 1, repositories: 1 },
        username: 'mathewsmachado',
      }}
    />
  );

  expect(screen.getByRole('link')).toHaveAttribute(
    'href',
    expect.stringMatching(/github.com\/mathewsmachado$/)
  );

  render(
    <ModalResult
      isOpen
      onClose={() => {}}
      type='single'
      modalOneContent={{
        name: 'tl',
        type: 'repo',
        statuses: { forks: 1, issues: 1, stars: 1 },
        username: 'mathewsmachado',
      }}
    />
  );

  expect(screen.getAllByRole('link')[1]).toHaveAttribute(
    'href',
    expect.stringMatching(/github.com\/mathewsmachado\/tl$/)
  );
});
