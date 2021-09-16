import React from 'react';

import { setModalRoot } from 'utils/dom';
import { StyleProvider } from 'styles/StyleProvider.tsx';

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
