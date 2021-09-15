import { ComponentStory, ComponentMeta } from '@storybook/react';

import { theme } from 'styles/theme';
import { StoryContainer } from 'utils/storybook';

import { Base, BaseProps, BaseContentInnerHeight } from '.';

export default {
  title: 'Base',
  component: Base,
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = ({ children }: BaseProps) => (
  <Base>
    <StoryContainer
      style={{
        maxWidth: 'unset',
        width: '100%',
        height: BaseContentInnerHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0.8rem',
        border: `1px solid ${theme.color.accent}`,
        color: theme.color.accent,
      }}
    >
      <h1>{children}</h1>
    </StoryContainer>
  </Base>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Imagine a really nice content here :p',
};
