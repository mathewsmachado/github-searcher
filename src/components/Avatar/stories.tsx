import { ComponentStory, ComponentMeta } from '@storybook/react';

import { darkBackground, disableArgTypes } from 'utils/storybook';

import { Avatar, AvatarProps } from '.';

export default {
  title: 'Avatar',
  component: Avatar,
  ...darkBackground(),
  ...disableArgTypes<AvatarProps>(['pictureUrl', 'type', 'as']),
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const User = Template.bind({});
User.argTypes = disableArgTypes(['href'], false);
User.args = {
  name: 'Mathews',
  username: 'machado',
  type: 'user',
  about: 'A passionate developer.',
  direction: 'column',
};

export const Repo = Template.bind({});
Repo.argTypes = User.argTypes;
Repo.args = {
  ...User.args,
  name: 'Jest',
  username: 'facebook',
  type: 'repo',
  about: 'A passionate tool.',
};

export const asLink = Template.bind({});
asLink.args = {
  ...User.args,
  as: 'a',
  href: 'https://github.com/mathewsmachado',
};
