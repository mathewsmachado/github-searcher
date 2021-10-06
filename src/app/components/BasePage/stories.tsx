import { ComponentStory, ComponentMeta } from '@storybook/react';

import { theme } from 'app/styles';
import { StoryContainer } from 'app/utils/storybook';

import { BasePage, BasePageProps, BasePageContentInnerHeight } from '.';

export default {
  title: 'BasePage',
  component: BasePage,
} as ComponentMeta<typeof BasePage>;

const Template: ComponentStory<typeof BasePage> = ({
  children,
}: BasePageProps) => (
  <BasePage>
    <StoryContainer
      style={{
        maxWidth: 'unset',
        height: BasePageContentInnerHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${theme.color.accent}`,
        color: theme.color.accent,
        padding: '0 2px',
        wordWrap: 'break-word',
      }}
    >
      <h1>{children}</h1>
    </StoryContainer>
  </BasePage>
);

export const Default = Template.bind({});
Default.args = {
  children: 'A cowboy and a clown went to a bar...🤠 🤡',
};
