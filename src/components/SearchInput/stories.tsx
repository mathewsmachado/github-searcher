import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchInput } from '.';

export default {
  title: 'SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Single = Template.bind({});
Single.args = {
  inputsData: [{ placeholder: 'Username' }],
};

export const Double = Template.bind({});
Double.args = {
  inputsData: [{ placeholder: 'Username' }, { placeholder: 'Repo' }],
};

export const Composed = Template.bind({});
Composed.args = {
  inputsData: [
    { placeholder: 'Username' },
    { placeholder: 'Repo' },
    { placeholder: 'Username' },
    { placeholder: 'Repo' },
  ],
};
