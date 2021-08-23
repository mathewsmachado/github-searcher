import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'utils/storybook';

import { Modal } from '.';

export default {
  title: 'Modal',
  component: Modal,
  ...disableArgTypes(['children', 'onModalClose']),
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: Array.from({ length: 20 }).map(() => <br />),
  isOpen: true,
  onModalClose: () => window.alert('working'),
};
