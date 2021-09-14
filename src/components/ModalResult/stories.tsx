import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'utils/storybook';

import { ModalResult, ModalResultProps } from '.';

export default {
  title: 'ModalResult',
  component: ModalResult,
  ...disableArgTypes<ModalResultProps>(['isOpen', 'onClose']),
} as ComponentMeta<typeof ModalResult>;

const Template: ComponentStory<typeof ModalResult> = (args) => (
  <ModalResult {...args} />
);

export const User = Template.bind({});
User.argTypes = disableArgTypes<ModalResultProps>(['modalTwoContent'], false);
User.args = {
  isOpen: true,
  onClose: () => window.alert('working'),
  modalOneContent: {
    name: 'MathewsMachado',
    username: 'mathewsmachado',
    type: 'user',
    about: 'A passionate developer.',
    statuses: { followers: 777, following: 1, repositories: 99 },
    socialMediaUsernames: { linkedin: 'mathewsmachado' },
  },
};

export const RepoSingle = Template.bind({});
RepoSingle.argTypes = User.argTypes;
RepoSingle.args = {
  ...User.args,
  modalOneContent: {
    name: 'tl',
    username: 'mathewsmachado',
    about: 'A command-line translator',
    type: 'repo',
    statuses: { stars: 777, forks: 1, issues: 99 },
    socialMediaUsernames: {},
  },
};

export const RepoDouble = Template.bind({});
RepoDouble.args = {
  ...RepoSingle.args,
  modalTwoContent: RepoSingle.args.modalOneContent,
};
