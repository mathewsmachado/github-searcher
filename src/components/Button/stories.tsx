import { ComponentStory, ComponentMeta } from '@storybook/react';

import { darkBackground, disableArgTypes } from 'utils/storybook';
import { Vs } from 'components/Vs';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  ...darkBackground(),
  ...disableArgTypes(['children', 'onClick']),
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Search user',
  color: 'accent',
  size: 'small',
  minimal: false,
};

export const withIcon = Template.bind({});
withIcon.args = {
  ...Default.args,
  children: <Vs color='secondary' />,
};
