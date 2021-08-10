import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { usernames } from './mock';
import { SocialMediaIcons } from '.';

describe('<SocialMediaIcons />', () => {
  it('should render a xlarge size by default', () => {
    render(<SocialMediaIcons usernames={usernames.one} />, 'wrapper');

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyleRule(
      'font-size',
      theme.font.size.small
    );
  });

  it('should render a medium size', () => {
    render(
      <SocialMediaIcons usernames={usernames.one} size='medium' />,
      'wrapper'
    );

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyleRule(
      'font-size',
      theme.font.size.xsmall
    );
  });

  it('should render a label only if passed', () => {
    const { container: containerOne } = render(
      <SocialMediaIcons usernames={usernames.one} />
    );

    expect(containerOne.querySelector('span')).toBeNull();

    const { container: containerTwo } = render(
      <SocialMediaIcons usernames={usernames.one} label='check it on' />
    );
    const label = containerTwo.querySelector('span');

    expect(label).not.toBeNull();
    expect(label).toHaveTextContent(/check it on/i);
  });

  it('should render multiple icons', () => {
    render(<SocialMediaIcons usernames={usernames.three} />);

    const github = screen.getByRole('link', { name: /github/i });
    const twitter = screen.getByRole('link', { name: /twitter/i });
    const linkedin = screen.getByRole('link', { name: /linkedin/i });

    expect(twitter).toHaveAttribute('href', 'https://www.twitter.com/mathews');
    expect(github).toHaveAttribute('href', 'https://www.github.com/machado');
    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/amorim'
    );
  });

  it('should render a centralized icon if there is only one and spaced-between otherwise', () => {
    render(<SocialMediaIcons usernames={usernames.one} />);

    expect(screen.getByRole('link').parentElement).toHaveStyleRule(
      'justify-content',
      'center'
    );

    render(<SocialMediaIcons usernames={usernames.two} />);

    expect(screen.getAllByRole('link')[1].parentElement).toHaveStyleRule(
      'justify-content',
      'space-between'
    );
  });
});
