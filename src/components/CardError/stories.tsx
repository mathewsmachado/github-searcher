import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardError } from '.';

export default {
  title: 'CardError',
  component: CardError,
} as ComponentMeta<typeof CardError>;

const Template: ComponentStory<typeof CardError> = (args) => (
  <CardError {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'No results found!',
};
