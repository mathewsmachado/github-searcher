import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UsersList } from '.';

export default {
  title: 'UsersList',
  component: UsersList,
} as ComponentMeta<typeof UsersList>;

const Template: ComponentStory<typeof UsersList> = (args) => (
  <UsersList {...args} />
);

const user = {
  name: 'Mathews Machado',
  username: 'mathewsmachado',
  bio: 'A passionate developer.',
  pictureUrl: 'some-url',
  fetchedAt: 2987654,
  socialMediaUsernames: { github: '0', linkedin: '0', twitter: '0' },
  statuses: { followers: 0, following: 0, repositories: 0 },
};

export const Default = Template.bind({});
Default.args = {
  onArrowClick: () => () => {},
  users: [user, user, user],
};
