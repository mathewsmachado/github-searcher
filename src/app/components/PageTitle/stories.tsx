import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageTitle } from '.';

export default {
  title: 'PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  unfilledText: 'Find a',
  filledText: 'developer',
};
