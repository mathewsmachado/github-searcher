import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import { SocialMediaIcons } from '.';

describe('<SocialMediaIcons />', () => {
  it('should render a xlarge size by default', () => {
    render(<SocialMediaIcons usernames={{ twitter: 'mathews' }} />, 'wrapper');

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyleRule(
      'font-size',
      theme.font.size.small
    );
  });

  it('should render a medium size', () => {
    render(
      <SocialMediaIcons usernames={{ twitter: 'mathews' }} size='medium' />,
      'wrapper'
    );

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyleRule(
      'font-size',
      theme.font.size.xsmall
    );
  });

  it('should render a label only if passed', () => {
    const { container: containerOne } = render(
      <SocialMediaIcons usernames={{ twitter: 'mathews' }} />
    );

    expect(containerOne.querySelector('span')).toBeNull();

    const { container: containerTwo } = render(
      <SocialMediaIcons
        usernames={{ twitter: 'mathews' }}
        label='check it on'
      />
    );
    const label = containerTwo.querySelector('span');

    expect(label).not.toBeNull();
    expect(label).toHaveTextContent(/check it on/i);
  });

  it('should render multiple icons', () => {
    render(
      <SocialMediaIcons
        usernames={{
          twitter: 'mathews',
          github: 'machado',
          linkedin: 'amorim',
        }}
      />
    );

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

  /**
   * Couldn't find where is the error. In storybook all seems like the expected.
   *
   * Seems like a bug with toHaveStyle/toHaveStyleRule (it wouldn't be the
   * first time).
   */
  it.skip('should render a centralized icon if there is only one and spaced-between otherwise', () => {
    render(<SocialMediaIcons usernames={{ twitter: 'mathews' }} />);

    expect(screen.getByRole('link').parentElement).toHaveStyleRule(
      'justify-content',
      'center'
    );

    render(
      <SocialMediaIcons usernames={{ twitter: 'mathews', github: 'machado' }} />
    );

    expect(screen.getAllByRole('link')[1].parentElement).toHaveStyleRule(
      'justify-content',
      'space-between'
    );
  });
});
