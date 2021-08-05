import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as mock from './mock';
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
  label: mock.label,
  usernames: mock.usernames.one,
};

export const TwoIcons = Template.bind({});
TwoIcons.args = {
  usernames: mock.usernames.two,
};

export const ThreeIcons = Template.bind({});
ThreeIcons.args = {
  usernames: mock.usernames.three,
};
