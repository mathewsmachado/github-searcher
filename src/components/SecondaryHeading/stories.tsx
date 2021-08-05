import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecondaryHeading } from '.';

export default {
  title: 'SecondaryHeading',
  component: SecondaryHeading,
} as ComponentMeta<typeof SecondaryHeading>;

const Template: ComponentStory<typeof SecondaryHeading> = (args) => (
  <SecondaryHeading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Look for people',
  size: 'huge',
  thin: false,
};
