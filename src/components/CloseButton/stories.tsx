import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'app/utils/storybook';

import { CloseButton, CloseButtonProps } from '.';

export default {
  title: 'CloseButton',
  component: CloseButton,
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'accent'],
    },
    ...disableArgTypes<CloseButtonProps>(['onClick'], false),
  },
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  size: 'small',
  minimal: false,
};
