import { ComponentStory, ComponentMeta } from '@storybook/react';

import { disableArgTypes } from 'utils/storybook';

import { SearchInputProps } from './types';
import { SearchInput } from '.';

export default {
  title: 'SearchInput',
  component: SearchInput,
  ...disableArgTypes<SearchInputProps>(['type']),
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Single = Template.bind({});
Single.argTypes = disableArgTypes<SearchInputProps>(
  ['inputTwo', 'inputThree', 'inputFour'],
  false
);
Single.args = { type: 'single', inputOne: { placeholder: 'Username' } };

export const Double = Template.bind({});
Double.argTypes = disableArgTypes<SearchInputProps>(
  ['inputThree', 'inputFour'],
  false
);
Double.args = {
  ...Single.args,
  type: 'double',
  inputTwo: { placeholder: 'Repo' },
};

export const Composed = Template.bind({});
Composed.args = {
  ...Double.args,
  type: 'doubleComposed',
  inputThree: { placeholder: 'Repo' },
  inputFour: { placeholder: 'Username' },
};
