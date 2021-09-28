import { ComponentStory, ComponentMeta } from '@storybook/react';

import { darkBackground, disableArgTypes } from 'app/utils/storybook';

import { TextButton } from '.';

export default {
  title: 'TextButton',
  component: TextButton,
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'accent'],
    },
    ...disableArgTypes(['onClick', 'ref', 'theme', 'as', 'forwardedAs'], false),
  },
  ...darkBackground(),
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Search User',
  color: 'accent',
  size: 'small',
  minimal: false,
};
