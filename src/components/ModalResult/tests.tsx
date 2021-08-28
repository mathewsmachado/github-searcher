import { render, screen } from 'utils/tests';

import mock from './mock.jpg';
import { ModalResult, ModalResultProps } from '.';

const userProps: ModalResultProps = {
  pictureUrl: mock,
  name: 'Mathews',
  username: 'mathewsmachado',
  statuses: { followers: 777, following: 1, repositories: 99 },
  socialMediaUsernames: { linkedin: 'mathewsmachado' },
  isOpen: true,
  type: 'user',
  onClose: () => {},
};

const repoProps: ModalResultProps = {
  ...userProps,
  name: 'tl',
  statuses: { stars: 777, forks: 1, issues: 99 },
  type: 'repo',
};

describe('<ResultModal />', () => {
  it('should render all the items, including a label, an about by default and a github icon by default', () => {
    render(<ModalResult {...userProps} />);

    const picture = screen.getByRole('img');
    expect(picture).toBeInTheDocument();

    const name = screen.getByText('Mathews');
    expect(name).toBeInTheDocument();

    const username = screen.getByText(/@mathewsmachado/i);
    expect(username).toBeInTheDocument();

    const about = screen.getByText(/a passionate developer/i);
    expect(about).toBeInTheDocument();

    const followers = screen.getByText(/followers/i);
    expect(followers).toBeInTheDocument();

    const following = screen.getByText(/following/i);
    expect(following).toBeInTheDocument();

    const repositories = screen.getByText(/repositories/i);
    expect(repositories).toBeInTheDocument();

    const label = screen.getByText(/user on/i);
    expect(label).toBeInTheDocument();

    const linkedin = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedin).toBeInTheDocument();

    const github = screen.getByRole('link', { name: /github/i });
    expect(github).toBeInTheDocument();
  });

  it('should render render the social media icons label based on modal type ', () => {
    render(<ModalResult {...userProps} />);

    expect(screen.getByText(/check this user on/i)).toBeInTheDocument();

    render(<ModalResult {...repoProps} />);

    expect(screen.getByText(/check it on/i)).toBeInTheDocument();
  });

  it('should build the github icon link based on the modal type ', () => {
    render(<ModalResult {...userProps} />);
    render(<ModalResult {...repoProps} />);

    const icons = screen.getAllByRole('link', { name: /github/i });

    expect(icons[0]).toHaveAttribute(
      'href',
      'https://www.github.com/mathewsmachado'
    );
    expect(icons[1]).toHaveAttribute(
      'href',
      'https://www.github.com/mathewsmachado/tl'
    );
  });
});
