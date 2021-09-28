import { UserMapper } from 'core/mappers';
import { UserService } from '.';

it('should fetch an user by username', async () => {
  jest.spyOn(UserService.httpClient, 'get');
  jest
    .spyOn(UserMapper, 'mapFromGithubUser')
    .mockReturnValue({ mock: true } as any);

  const user = await UserService.getByUsername('mathewsmachado');

  expect(user).toStrictEqual({ mock: true });
  expect(UserService.httpClient.baseUrl).toBe('https://api.github.com/users/');
  expect(UserService.httpClient.get).toBeCalledWith('mathewsmachado');
});
