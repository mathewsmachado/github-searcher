import { User, GithubUser } from 'core/entities';

import { UserMapper } from '.';

it('should map a Github user to a User', () => {
  const githubUser: GithubUser = {
    name: 'Mathews Machado',
    login: 'mathewsmachado',
    bio: 'React developer',
    avatar_url: './',
    followers: 1,
    following: 1,
    public_repos: 1,
    html_url: 'github.com/mathewsmachado',
    twitter_username: 'twitter.com/mathewsmachado1',
  };

  const user = new User({
    username: 'mathewsmachado',
    name: 'Mathews Machado',
    bio: 'React developer',
    pictureUrl: './',
    socialMediaUsernames: {
      github: 'github.com/mathewsmachado',
      twitter: 'twitter.com/mathewsmachado1',
    },
    statuses: {
      followers: 1,
      following: 1,
      repositories: 1,
    },
  });

  expect(UserMapper.mapFromGithubUser(githubUser)).toStrictEqual(user);
});
