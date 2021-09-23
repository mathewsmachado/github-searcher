import { UserMapper } from 'core/mappers';

import { UserService } from '.';

it('should fetch an user by username', async () => {
  jest.spyOn(UserService.httpClient, 'get');
  // @ts-ignore
  jest.spyOn(UserMapper, 'mapFromGithubUser').mockReturnValue({ mock: true });

  expect(await UserService.getByUsername('mathewsmachado')).toStrictEqual({
    mock: true,
  });

  expect(UserService.httpClient.get).toBeCalledWith('/mathewsmachado');
});
