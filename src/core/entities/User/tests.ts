import { User } from '.';

const props = {
  name: 'Mathews Machado',
  username: 'mathewsmachado',
  about: 'React programmer',
  pictureUrl: './',
  statuses: { followers: 1, following: 1, repositories: 1 },
  socialMediaUsernames: {
    github: 'mathewsmachado',
    linkedin: 'mathewsmachado',
    twitter: 'mathewsmachado',
  },
};

it('should instantiate a new User', () => {
  const user = new User(props);

  expect(user).toHaveProperty('name', 'Mathews Machado');
  expect(user).toHaveProperty('username', 'mathewsmachado');
  expect(user).toHaveProperty('about', 'React programmer');
  expect(user).toHaveProperty('fetchedAt', expect.any(Number));
  expect(user).toHaveProperty('pictureUrl', './');
  expect(user).toHaveProperty('statuses', {
    followers: 1,
    following: 1,
    repositories: 1,
  });
  expect(user).toHaveProperty('socialMediaUsernames', {
    github: 'mathewsmachado',
    linkedin: 'mathewsmachado',
    twitter: 'mathewsmachado',
  });
});

it("should assign a default name and an about if the user don't provide", () => {
  const user = new User({ ...props, name: '', about: '' });

  expect(user).toHaveProperty('name', 'Mathewsmachado');
  expect(user).toHaveProperty('about', 'A passionate developer.');
});
