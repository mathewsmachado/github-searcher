import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryContainer } from 'utils/storybook';

import { GithubSearcherIcon } from '.';

export default {
  title: 'GithubSearcherIcon',
  component: GithubSearcherIcon,
} as ComponentMeta<typeof GithubSearcherIcon>;

const Template: ComponentStory<typeof GithubSearcherIcon> = (args) => (
  <GithubSearcherIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  separator: false,
};

export const Contained = Template.bind({});
Contained.args = Default.args;
Contained.decorators = [
  (Story) => (
    <StoryContainer>
      <Story />
    </StoryContainer>
  ),
];
