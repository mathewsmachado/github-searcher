import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Vs } from '.';

export default {
  title: 'Vs',
  component: Vs,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof Vs>;

const Template: ComponentStory<typeof Vs> = (args) => <Vs {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'accent',
};

export const Contained = Template.bind({});
Contained.args = Default.args;
Contained.decorators = [
  (Story) => (
    <div style={{ width: '200px' }}>
      <Story />
    </div>
  ),
];