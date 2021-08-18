import { ComponentStory, ComponentMeta } from '@storybook/react';
import { disableArgTypes } from 'utils/storybook';

import { VsButton } from '.';

export default {
  title: 'VsButton',
  component: VsButton,
  ...disableArgTypes(['onClick', 'color']),
} as ComponentMeta<typeof VsButton>;

const Template: ComponentStory<typeof VsButton> = (args) => (
  <VsButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  minimal: false,
  size: 'small',
};
