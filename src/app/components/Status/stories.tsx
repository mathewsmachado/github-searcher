import { ComponentStory, ComponentMeta } from '@storybook/react';

import { darkBackground } from 'app/utils/storybook';

import { Status } from '.';

export default {
  title: 'Status',
  component: Status,
  ...darkBackground(),
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 99,
  label: 'followers',
};
