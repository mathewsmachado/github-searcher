import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  darkBackground,
  disableArgTypes,
  StoryContainer,
} from 'app/utils/storybook';

import { SocialMediaIcons, SocialMediaIconsProps } from '.';

export default {
  title: 'SocialMediaIcons',
  component: SocialMediaIcons,
  ...darkBackground(),
  ...disableArgTypes<SocialMediaIconsProps>(['usernames']),
} as ComponentMeta<typeof SocialMediaIcons>;

const Template: ComponentStory<typeof SocialMediaIcons> = (args) => (
  <SocialMediaIcons {...args} />
);

export const OneIcon = Template.bind({});
OneIcon.args = {
  label: 'check it on',
  usernames: { twitter: 'mathews' },
  size: 'xlarge',
};

export const TwoIcons = Template.bind({});
TwoIcons.args = {
  ...OneIcon.args,
  label: '',
  usernames: { ...OneIcon.args.usernames, github: 'machado' },
};

export const ThreeIcons = Template.bind({});
ThreeIcons.args = {
  ...TwoIcons.args,
  usernames: { ...TwoIcons.args.usernames, linkedin: 'amorim' },
};

export const Contained = Template.bind({});
Contained.args = ThreeIcons.args;
Contained.decorators = [
  (Story) => (
    <StoryContainer>
      <Story />
    </StoryContainer>
  ),
];
