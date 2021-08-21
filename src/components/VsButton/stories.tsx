import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VsButton } from '.';

export default {
  title: 'VsButton',
  component: VsButton,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'accent'],
    },
  },
} as ComponentMeta<typeof VsButton>;

const Template: ComponentStory<typeof VsButton> = (args) => (
  <VsButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'accent',
  minimal: false,
  size: 'small',
};
