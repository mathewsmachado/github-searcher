import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'utils/storybook';

import { CardResult, CardResultProps } from '.';

export default {
  title: 'CardResult',
  component: CardResult,
  ...disableArgTypes<CardResultProps>(['pictureUrl', 'type']),
} as ComponentMeta<typeof CardResult>;

const Template: ComponentStory<typeof CardResult> = (args) => (
  <CardResult {...args} />
);

export const User = Template.bind({});
User.args = {
  name: 'Mathews Machado',
  username: 'mathewsmachado',
  type: 'user',
  about: 'A passionate developer.',
};

export const Repo = Template.bind({});
Repo.args = {
  ...User.args,
  name: 'tl',
  type: 'repo',
  about: 'A passionate tool.',
};
