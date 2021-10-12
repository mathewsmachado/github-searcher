import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormSingle } from '.';

export default {
  title: 'FormSingle',
  component: FormSingle,
} as ComponentMeta<typeof FormSingle>;

const Template: ComponentStory<typeof FormSingle> = (args) => (
  <FormSingle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  inputData: { placeholder: 'Username' },
};
