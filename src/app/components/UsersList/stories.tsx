import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UsersList } from '.';

export default {
  title: 'UsersList',
  component: UsersList,
} as ComponentMeta<typeof UsersList>;

const Template: ComponentStory<typeof UsersList> = (args) => (
  <UsersList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onArrowClick: () => {},
  users: [
    {
      name: 'Mathews Machado',
      username: 'mathewsmachado',
      bio: 'A passionate developer.',
      href: 'https://github.com/mathewsmachado',
      pictureUrl: 'some-url',
    },
    {
      name: 'Mathews Machado',
      username: 'mathewsmachado',
      bio: 'A passionate developer.',
      href: 'https://github.com/mathewsmachado',
      pictureUrl: 'some-url',
    },
    {
      name: 'Mathews Machado',
      username: 'mathewsmachado',
      bio: 'A passionate developer.',
      href: 'https://github.com/mathewsmachado',
      pictureUrl: 'some-url',
    },
  ],
};
