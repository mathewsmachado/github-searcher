import { User, GithubUser } from 'core/entities';

export class UserMapper {
  static mapFromGithubUser(u: GithubUser): User {
    return new User({
      username: u.login,
      name: u.name,
      bio: u.bio,
      pictureUrl: u.avatar_url,
      socialMediaUsernames: {
        github: u.html_url,
        twitter: u.twitter_username,
      },
      statuses: {
        followers: u.followers,
        following: u.following,
        repositories: u.public_repos,
      },
    });
  }
}
