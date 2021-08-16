/* eslint-disable react/prop-types */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { disableArgTypes } from 'utils/storybook';

import { Card } from '.';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);
Default.argTypes = disableArgTypes(['children'], false);

export const Populated: ComponentStory<typeof Card> = ({ children }) => (
  <Card>
    <h1 style={{ textAlign: 'center', color: 'rgba(255, 0, 127)' }}>
      {children}
    </h1>
  </Card>
);
Populated.args = { children: 'Github Searcher' };
