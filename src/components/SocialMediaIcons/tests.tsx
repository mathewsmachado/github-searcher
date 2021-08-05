import { theme } from 'styles/theme';
import { render, screen } from 'utils/tests';

import * as mock from './mock';
import { SocialMediaIcons } from '.';

describe('<SocialMediaIcons />', () => {
  it('should render a xlarge size by default', () => {
    render(<SocialMediaIcons usernames={mock.usernames.one} />, 'wrapper');

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyleRule(
      'font-size',
      theme.font.size.small
    );
  });

  it('should render a medium size', () => {
    render(
      <SocialMediaIcons usernames={mock.usernames.one} size='medium' />,
      'wrapper'
    );

    expect(screen.getByTestId('wrapper').firstChild).toHaveStyleRule(
      'font-size',
      theme.font.size.xsmall
    );
  });

  it('should render a label only if passed', () => {
    const { container: containerOne } = render(
      <SocialMediaIcons usernames={mock.usernames.one} />
    );

    expect(containerOne.querySelector('span')).toBeNull();

    const { container: containerTwo } = render(
      <SocialMediaIcons usernames={mock.usernames.one} label={mock.label} />
    );
    const label = containerTwo.querySelector('span');

    expect(label).not.toBeNull();
    expect(label).toHaveTextContent(mock.label);
  });

  it('should render multiple icons', () => {
    render(<SocialMediaIcons usernames={mock.usernames.three} />);

    const [twitter, linkedin, github] = screen.getAllByRole(
      'link'
    ) as HTMLAnchorElement[];

    expect(github.href).toMatch(new RegExp(mock.usernames.three.github, 'gi'));
    expect(linkedin.href).toMatch(
      new RegExp(mock.usernames.three.linkedin, 'gi')
    );
    expect(twitter.href).toMatch(
      new RegExp(mock.usernames.three.twitter, 'gi')
    );
  });

  it('should render a centralized icon if there is only one and spaced-between otherwise', () => {
    render(<SocialMediaIcons usernames={mock.usernames.one} />);

    expect(screen.getByRole('link').parentElement).toHaveStyleRule(
      'justify-content',
      'center'
    );

    render(<SocialMediaIcons usernames={mock.usernames.two} />);

    expect(screen.getAllByRole('link')[1].parentElement).toHaveStyleRule(
      'justify-content',
      'space-between'
    );
  });
});
