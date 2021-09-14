import { ComponentStory, ComponentMeta } from '@storybook/react';

import { theme } from 'styles/theme';

import { PageBase, PageBaseProps } from '.';

export default {
  title: 'PageBase',
  component: PageBase,
} as ComponentMeta<typeof PageBase>;

const Template: ComponentStory<typeof PageBase> = ({
  children,
}: PageBaseProps) => (
  <PageBase>
    <h1
      style={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)',
        color: theme.color.accent,
      }}
    >
      {children}
    </h1>
  </PageBase>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Imagine a really nice content here :p',
};
