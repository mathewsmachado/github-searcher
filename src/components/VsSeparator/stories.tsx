import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VsSeparator } from '.';

export default {
  title: 'VsSeparator',
  component: VsSeparator,
} as ComponentMeta<typeof VsSeparator>;

const Template: ComponentStory<typeof VsSeparator> = (args) => (
  <VsSeparator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  orientation: 'vertical',
};
