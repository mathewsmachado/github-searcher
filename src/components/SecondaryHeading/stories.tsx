import { ComponentStory, ComponentMeta } from '@storybook/react';

import { title } from './mock';
import { SecondaryHeading } from '.';

export default {
  title: 'SecondaryHeading',
  component: SecondaryHeading,
} as ComponentMeta<typeof SecondaryHeading>;

const Template: ComponentStory<typeof SecondaryHeading> = (args) => (
  <SecondaryHeading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: title,
  size: 'huge',
  thin: false,
};
