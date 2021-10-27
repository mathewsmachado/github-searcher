import { ComponentStory, ComponentMeta } from '@storybook/react';
import { disableArgTypes } from 'app/utils/storybook';

import { Spinner } from '.';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'accent'],
    },
    ...disableArgTypes(['ref', 'theme', 'as', 'forwardedAs'], false),
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'small',
  color: 'accent',
};
