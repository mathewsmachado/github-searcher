import { API } from 'core/constants';
import { User, GithubUser, HttpClient } from 'core/entities';
import { UserMapper } from 'core/mappers';

export class UserService {
  static readonly REQUESTS_PATH = `${API.BASE_URL}/users/`;
  static readonly httpClient = new HttpClient(UserService.REQUESTS_PATH);

  static async getByUsername(username: User['username']): Promise<User> {
    const githubUser = await UserService.httpClient.get<GithubUser>(username);

    return UserMapper.mapFromGithubUser(githubUser);
  }
}
