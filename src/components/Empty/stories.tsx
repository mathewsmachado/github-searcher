import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Empty } from '.';

export default {
  title: 'Empty',
  component: Empty,
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Look for people and find out their Github stats',
};
