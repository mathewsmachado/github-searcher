import { API } from 'core/constants';
import { User, GithubUser, HttpClient } from 'core/entities';
import { UserMapper } from 'core/mappers';
import { Nullable } from 'types';

export class UserService {
  static readonly REQUESTS_PATH = `${API.BASE_URL}/users/`;
  static readonly httpClient = new HttpClient(UserService.REQUESTS_PATH);

  static async getByUsername(
    username: User['username']
  ): Promise<Nullable<User>> {
    try {
      const githubUser = await UserService.httpClient.get<GithubUser>(username);
      return UserMapper.mapFromGithubUser(githubUser);
    } catch (error) {
      return null;
    }
  }
}
