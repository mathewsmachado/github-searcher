import { ComponentStory, ComponentMeta } from '@storybook/react';

import { removeArgType } from 'utils/storybook';

import { usernames } from './mock';
import { SocialMediaIcons } from '.';

export default {
  title: 'SocialMediaIcons',
  component: SocialMediaIcons,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    ...removeArgType('usernames'),
  },
} as ComponentMeta<typeof SocialMediaIcons>;

const Template: ComponentStory<typeof SocialMediaIcons> = (args) => (
  <SocialMediaIcons {...args} />
);

export const OneIcon = Template.bind({});
OneIcon.args = {
  label: 'check it on',
  usernames: usernames.one,
  size: 'xlarge',
};

export const TwoIcons = Template.bind({});
TwoIcons.args = {
  label: '',
  usernames: usernames.two,
  size: 'xlarge',
};

export const ThreeIcons = Template.bind({});
ThreeIcons.args = {
  label: '',
  usernames: usernames.three,
  size: 'xlarge',
};
