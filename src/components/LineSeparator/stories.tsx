import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'app/utils/storybook';

import { LineSeparator } from '.';

export default {
  title: 'LineSeparator',
  component: LineSeparator,
  argTypes: {
    ...disableArgTypes(['as', 'forwardedAs', 'ref', 'theme'], false),
    color: {
      control: { type: 'radio' },
      options: ['primary', 'accent'],
    },
  },
} as ComponentMeta<typeof LineSeparator>;

const Template: ComponentStory<typeof LineSeparator> = (args) => (
  <LineSeparator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'accent',
  orientation: 'horizontal',
  thickness: 'regular',
};
