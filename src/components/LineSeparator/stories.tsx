import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LineSeparator } from '.';

export default {
  title: 'LineSeparator',
  component: LineSeparator,
  argTypes: {
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
} as ComponentMeta<typeof LineSeparator>;

const Template: ComponentStory<typeof LineSeparator> = (args) => (
  <LineSeparator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  orientation: 'horizontal',
  thickness: 'regular',
};
