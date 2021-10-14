import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'app/utils/storybook';

import { Modal, ModalProps } from '.';

export default {
  title: 'Modal',
  component: Modal,
  ...disableArgTypes<ModalProps>(['onClose', 'children']),
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>Hello, world</h1>
      <br />
    </>
  ),
  isOpen: true,
  onClose: () => {},
};
