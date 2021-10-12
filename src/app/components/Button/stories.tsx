import { ComponentStory, ComponentMeta } from '@storybook/react';

import { darkBackground, disableArgTypes } from 'app/utils/storybook';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'accent'],
    },
    ...disableArgTypes(
      ['children', 'onClick', 'ref', 'theme', 'as', 'forwardedAs'],
      false
    ),
  },
  ...darkBackground(),
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'accent',
  size: 'small',
  minimal: false,
};
