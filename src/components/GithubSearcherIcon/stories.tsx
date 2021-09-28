import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoryContainer } from 'app/utils/storybook';

import { GithubSearcherIcon } from '.';

export default {
  title: 'GithubSearcherIcon',
  component: GithubSearcherIcon,
} as ComponentMeta<typeof GithubSearcherIcon>;

const Template: ComponentStory<typeof GithubSearcherIcon> = () => (
  <GithubSearcherIcon />
);

export const Default = Template.bind({});

export const Contained = Template.bind({});
Contained.decorators = [
  (Story) => (
    <StoryContainer>
      <Story />
    </StoryContainer>
  ),
];
