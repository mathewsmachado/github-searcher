import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'app/utils/storybook';

import { UserResultModal, UserResultModalProps } from '.';
import mock from './mock.jpg';

export default {
  title: 'UserResultModal',
  component: UserResultModal,
  ...disableArgTypes<UserResultModalProps>(['isOpen', 'onClose', 'pictureUrl']),
} as ComponentMeta<typeof UserResultModal>;

const Template: ComponentStory<typeof UserResultModal> = (args) => (
  <UserResultModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => {},
  name: 'MathewsMachado',
  username: 'mathewsmachado',
  bio: 'A passionate developer.',
  statuses: { followers: 777, following: 1, repositories: 99 },
  pictureUrl: mock,
  socialMediaUsernames: {
    linkedin: 'mathewsmachado',
    github: 'mathewsmachado',
  },
};
