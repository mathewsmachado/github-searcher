import React from 'react';

import { setModalRoot } from 'app/utils/dom';
import { StyleProvider } from 'app/styles';

setModalRoot();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <StyleProvider>
      <Story />
    </StyleProvider>
  ),
];
