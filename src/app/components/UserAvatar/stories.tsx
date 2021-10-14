import { ComponentStory, ComponentMeta } from '@storybook/react';

import { darkBackground, disableArgTypes } from 'app/utils/storybook';

import { UserAvatar } from '.';

export default {
  title: 'UserAvatar',
  component: UserAvatar,
  ...darkBackground(),
} as ComponentMeta<typeof UserAvatar>;

const Template: ComponentStory<typeof UserAvatar> = (args) => (
  <UserAvatar {...args} />
);

export const User = Template.bind({});
User.argTypes = disableArgTypes(['href'], false);
User.args = {
  size: 'large',
  name: 'Mathews',
  username: 'machado',
  bio: 'A passionate developer.',
  pictureUrl: 'some-url',
};

export const asLink = Template.bind({});
asLink.args = {
  ...User.args,
  href: 'https://github.com/mathewsmachado',
};
