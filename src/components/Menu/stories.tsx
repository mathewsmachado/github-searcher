import { ComponentStory, ComponentMeta } from '@storybook/react';

import { darkBackground } from 'utils/storybook';

import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
  ...darkBackground(),
} as ComponentMeta<typeof Menu>;

export const Default: ComponentStory<typeof Menu> = () => <Menu />;
