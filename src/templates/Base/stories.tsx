import { ComponentStory, ComponentMeta } from '@storybook/react';

import { theme } from 'styles/theme';

import { Base, BaseProps } from '.';

export default {
  title: 'Base',
  component: Base,
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = ({ children }: BaseProps) => (
  <Base>
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
  </Base>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Imagine a really nice content here :p',
};
