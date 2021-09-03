import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'utils/storybook';

import { Modal, ModalProps } from '.';

export default {
  title: 'Modal',
  component: Modal,
  ...disableArgTypes<ModalProps>([
    'type',
    'onClose',
    'modalOneContent',
    'modalTwoContent',
  ]),
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Single = Template.bind({});
Single.args = {
  modalOneContent: Array.from({ length: 20 }).map(() => <br />),
  isOpen: true,
  onClose: () => window.alert('working'),
  closeButton: true,
  type: 'single',
};

export const Double = Template.bind({});
Double.args = {
  ...Single.args,
  modalTwoContent: Single.args.modalOneContent,
  type: 'double',
};
