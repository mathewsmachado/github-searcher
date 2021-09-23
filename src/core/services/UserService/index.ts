import { API_BASE_URL } from 'core/config';
import { User, GithubUser, HttpClient } from 'core/entities';
import { UserMapper } from 'core/mappers';

export class UserService {
  private static readonly REQUESTS_PATH = `${API_BASE_URL}/users`;
  public static readonly httpClient = new HttpClient(UserService.REQUESTS_PATH);

  static async getByUsername(username: User['username']): Promise<User> {
    const githubUser = await UserService.httpClient.get<GithubUser>(
      `/${username}`
    );

    return UserMapper.mapFromGithubUser(githubUser);
  }
}
