import { HttpClient } from '.';

it('should make a request to the passed url', async () => {
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve('fake-data'),
    })
  );

  const client = new HttpClient('fake-url');

  expect(await client.get('/path')).toBe('fake-data');
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('fake-url/path');
});

it('should throw if the response.ok be false', async () => {
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 400,
      ok: false,
      json: () => Promise.resolve('fake-data'),
    })
  );

  const client = new HttpClient('fake-url');

  await expect(client.get('/path')).rejects.toThrowError();
});
