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
  children: (
    <h1>
      Open the console to see the &quot;onModalClose&quot; been
      <br /> called
    </h1>
  ),
  isOpen: true,
  onModalClose: () => {
    // eslint-disable-next-line no-console
    console.log('onModalClose');
  },
};
