import { setModalRoot, unsetModalRoot } from 'app/utils/dom';
import { render, s } from 'app/utils/tests';

import { UserResultModal } from '.';
import mock from './mock.jpg';

beforeAll(() => setModalRoot());

afterAll(() => unsetModalRoot());

it('should render all the items correctly', () => {
  render(
    <UserResultModal
      isOpen
      onClose={() => {}}
      user={{
        name: 'mathews',
        username: 'mathewsmachado',
        statuses: { followers: 1, following: 1, repositories: 1 },
        pictureUrl: mock,
        socialMediaUsernames: {
          linkedin: 'mathewsmachado',
          github: 'mathewsmachado',
        },
      }}
    />,
    'wrapper'
  );
  const wrapper = s.getByTestId('wrapper');
  const avatar = s.getByRole('img');
  const overlay = avatar.parentElement;
  const status = s.getByText(/following/i);
  const socialMediaIcons = s.getByTitle(/github icon/i);

  expect(wrapper).toBeInTheDocument();
  expect(overlay).toBeInTheDocument();
  expect(avatar).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(socialMediaIcons).toBeInTheDocument();
});
