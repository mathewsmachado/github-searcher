import { setModalRoot, unsetModalRoot } from 'utils/dom';
import { render, s } from 'utils/tests';

import { ModalResult } from '.';

beforeAll(() => setModalRoot());

afterAll(() => unsetModalRoot());

it('should render a version with only one modal', () => {
  render(
    <ModalResult
      isOpen
      onClose={() => {}}
      modalOneContent={{
        name: 'mathews',
        type: 'user',
        statuses: { followers: 1, following: 1, repositories: 1 },
        username: 'mathewsmachado',
      }}
    />
  );

  const wrapper = document.getElementById('modal-root')!.firstChild;
  const overlay = wrapper?.firstChild;
  const avatar = s.getByRole('img');
  const status = s.getByText(/following/i);
  const socialMediaIcons = s.getByTitle(/github icon/i);

  expect(wrapper).toBeInTheDocument();
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
    />
  );

  const wrapper = document.getElementById('modal-root')!.firstChild;
  const overlay = wrapper?.firstChild;
  const avatars = s.getAllByRole('img');
  const statuses = s.getAllByText(/forks/i);
  const socialMediaIcons = s.getAllByTitle(/github icon/i);
  const vsSeparator = s.getByTitle(/vs/i);

  expect(wrapper!.childNodes).toHaveLength(4);
  expect(overlay).toBeInTheDocument();
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
      modalOneContent={{
        name: 'mathews',
        type: 'user',
        statuses: { followers: 1, following: 1, repositories: 1 },
        username: 'mathewsmachado',
      }}
    />
  );

  expect(s.getByRole('link')).toHaveAttribute(
    'href',
    expect.stringMatching(/github.com\/mathewsmachado$/)
  );

  render(
    <ModalResult
      isOpen
      onClose={() => {}}
      modalOneContent={{
        name: 'tl',
        type: 'repo',
        statuses: { forks: 1, issues: 1, stars: 1 },
        username: 'mathewsmachado',
      }}
    />
  );

  expect(s.getAllByRole('link')[1]).toHaveAttribute(
    'href',
    expect.stringMatching(/github.com\/mathewsmachado\/tl$/)
  );
});
