import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Search user',
  color: 'primary',
  size: 'large',
};
