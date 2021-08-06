import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LineSeparator } from '.';

const disable = { table: { disable: true } };
const disabledComponents = {
  as: disable,
  forwardedAs: disable,
  ref: disable,
  theme: disable,
};

export default {
  title: 'LineSeparator',
  component: LineSeparator,
  argTypes: {
    ...disabledComponents,
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
