import { User, GithubUser } from 'core/entities';

export class UserMapper {
  static mapFromGithubUser({
    avatar_url,
    followers,
    following,
    html_url,
    login,
    public_repos,
    bio,
    name,
    twitter_username,
  }: GithubUser): User {
    return new User({
      bio,
      name,
      username: login,
      pictureUrl: avatar_url,
      socialMediaUsernames: {
        github: UserMapper.extractGithubUsername(html_url),
        twitter: twitter_username,
      },
      statuses: { followers, following, repositories: public_repos },
    });
  }

  private static extractGithubUsername(html_url: string): string {
    const splitted = html_url.split('/');
    return splitted[splitted.length - 1];
  }
}
