import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'utils/storybook';

import { ModalResult, ModalResultProps } from '.';

export default {
  title: 'ModalResult',
  component: ModalResult,
  ...disableArgTypes<ModalResultProps>(['onClose', 'pictureUrl', 'type']),
} as ComponentMeta<typeof ModalResult>;

const Template: ComponentStory<typeof ModalResult> = (args) => (
  <ModalResult {...args} />
);

export const User = Template.bind({});
User.args = {
  isOpen: true,
  onClose: () => window.alert('working'),
  name: 'MathewsMachado',
  username: 'mathewsmachado',
  type: 'user',
  about: 'A passionate developer.',
  statuses: { followers: 777, following: 1, repositories: 99 },
  socialMediaUsernames: { linkedin: 'mathewsmachado' },
};

export const Repo = Template.bind({});
Repo.argTypes = disableArgTypes(['socialMediaUsernames'], false);
Repo.args = {
  ...User.args,
  name: 'tl',
  username: 'mathewsmachado',
  about: 'A command-line translator',
  type: 'repo',
  statuses: { stars: 777, forks: 1, issues: 99 },
  socialMediaUsernames: {},
};
