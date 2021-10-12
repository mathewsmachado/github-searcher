import { ComponentStory, ComponentMeta } from '@storybook/react';

import { darkBackground } from 'app/utils/storybook';

import { ButtonSearch } from '.';

export default {
  title: 'ButtonSearch',
  component: ButtonSearch,
  ...darkBackground(),
} as ComponentMeta<typeof ButtonSearch>;

const Template: ComponentStory<typeof ButtonSearch> = (args) => (
  <ButtonSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
