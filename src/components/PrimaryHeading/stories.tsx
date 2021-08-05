import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PrimaryHeading } from '.';

export default {
  title: 'PrimaryHeading',
  component: PrimaryHeading,
} as ComponentMeta<typeof PrimaryHeading>;

const Template: ComponentStory<typeof PrimaryHeading> = (args) => (
  <PrimaryHeading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Github Searcher',
  color: 'primary',
  unfilled: false,
};
