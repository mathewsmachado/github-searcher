/* eslint-disable react/destructuring-assignment */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'utils/storybook';

import { Overlay } from '.';

export default {
  title: 'Overlay',
  component: Overlay,
  argTypes: {
    ...disableArgTypes(['onClick', 'ref', 'theme', 'as', 'forwardedAs'], false),
  },
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => (
  <>
    <span>I {args.isVisible ? 'am' : 'will be'} overlapped</span>
    <Overlay {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
};
