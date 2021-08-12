import { ComponentStory, ComponentMeta } from '@storybook/react';

import { removeArgType } from 'utils/storybook';
import { Vs } from 'components/Vs';

import { IconButton } from '.';

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    ...removeArgType('children', 'onClick'),
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <Vs color='secondary' />,
  color: 'accent',
  size: 'small',
  minimal: false,
};
