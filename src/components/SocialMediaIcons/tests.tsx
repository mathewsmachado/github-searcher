import { theme } from 'styles/theme';
import { render, s } from 'utils/tests';

import { SocialMediaIcons } from '.';

it('should render the passed label', () => {
  render(
    <SocialMediaIcons usernames={{ twitter: 'mathews' }} label='check it on' />
  );

  expect(s.getByText(/check it on/i)).toBeInTheDocument();
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

  const github = s.getByRole('link', { name: /github/i });
  const twitter = s.getByRole('link', { name: /twitter/i });
  const linkedin = s.getByRole('link', { name: /linkedin/i });

  expect(twitter).toHaveAttribute('href', 'https://www.twitter.com/mathews');
  expect(github).toHaveAttribute('href', 'https://www.github.com/machado');
  expect(linkedin).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/amorim'
  );
});

it('should render only the necessary DOM nodes', () => {
  const { container: containerOne } = render(
    <SocialMediaIcons usernames={{ twitter: 'mathews', github: 'machado' }} />
  );

  expect(containerOne.querySelectorAll('div')).toHaveLength(1);
  expect(containerOne.querySelectorAll('span')).toHaveLength(0);

  const { container: containerTwo } = render(
    <SocialMediaIcons
      usernames={{ twitter: 'mathews', github: 'machado' }}
      label='check it out'
    />
  );

  expect(containerTwo.querySelectorAll('div')).toHaveLength(2);
  expect(containerTwo.querySelectorAll('span')).toHaveLength(1);
});

it('should render a xlarge size by default', () => {
  render(<SocialMediaIcons usernames={{ twitter: 'mathews' }} />, 'wrapper');

  expect(s.getByTestId('wrapper').firstChild).toHaveStyleRule(
    'font-size',
    theme.font.size.small
  );
});

it('should render a medium size', () => {
  render(
    <SocialMediaIcons usernames={{ twitter: 'mathews' }} size='medium' />,
    'wrapper'
  );

  expect(s.getByTestId('wrapper').firstChild).toHaveStyleRule(
    'font-size',
    theme.font.size.xsmall
  );
});

it('should render a centralized icon if there is only one and spaced-between otherwise', () => {
  render(<SocialMediaIcons usernames={{ twitter: 'mathews' }} />);

  expect(s.getByRole('link').parentElement).toHaveStyle({
    justifyContent: 'center',
  });

  render(
    <SocialMediaIcons usernames={{ twitter: 'mathews', github: 'machado' }} />
  );

  expect(s.getAllByRole('link')[1].parentElement).toHaveStyle({
    justifyContent: 'space-between',
  });
});
