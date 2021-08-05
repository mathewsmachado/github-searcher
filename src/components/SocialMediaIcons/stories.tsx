import { ComponentStory, ComponentMeta } from '@storybook/react';

import { usernames } from './mock';
import { SocialMediaIcons } from '.';

export default {
  title: 'SocialMediaIcons',
  component: SocialMediaIcons,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    usernames: { table: { disable: true } },
    label: { defaultValue: '' },
    size: { defaultValue: 'xlarge' },
  },
} as ComponentMeta<typeof SocialMediaIcons>;

const Template: ComponentStory<typeof SocialMediaIcons> = (args) => (
  <SocialMediaIcons {...args} />
);

export const OneIcon = Template.bind({});
OneIcon.args = {
  label: 'check it on',
  usernames: usernames.one,
};

export const TwoIcons = Template.bind({});
TwoIcons.args = {
  usernames: usernames.two,
};

export const ThreeIcons = Template.bind({});
ThreeIcons.args = {
  usernames: usernames.three,
};
