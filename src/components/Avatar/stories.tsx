import { ComponentStory, ComponentMeta } from '@storybook/react';

import { removeArgType } from 'utils/storybook';

import mock from './mock.jpg';
import { Avatar } from '.';

export default {
  title: 'Avatar',
  component: Avatar,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  argTypes: { ...removeArgType('pictureUrl', 'type', 'as') },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const User = Template.bind({});
User.argTypes = removeArgType('href');
User.args = {
  name: 'Mathews',
  username: 'machado',
  pictureUrl: mock,
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
