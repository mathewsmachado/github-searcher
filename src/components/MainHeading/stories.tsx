import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MainHeading } from '.';

export default {
  title: 'MainHeading',
  component: MainHeading,
} as ComponentMeta<typeof MainHeading>;

const Template: ComponentStory<typeof MainHeading> = (args) => (
  <MainHeading {...args} />
);

export const Default = Template.bind({});
Default.args = { unfilledText: 'Find a ', filledText: 'developer' };
