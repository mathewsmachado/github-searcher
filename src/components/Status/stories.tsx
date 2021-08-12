import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Status } from '.';

export default {
  title: 'Status',
  component: Status,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 99,
  label: 'followers',
};
