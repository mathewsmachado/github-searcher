import { ComponentStory, ComponentMeta } from '@storybook/react';

import { title } from './mock';
import { PrimaryHeading } from '.';

export default {
  title: 'PrimaryHeading',
  component: PrimaryHeading,
} as ComponentMeta<typeof PrimaryHeading>;

const Template: ComponentStory<typeof PrimaryHeading> = (args) => (
  <PrimaryHeading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: title,
  color: 'primary',
  unfilled: false,
};
