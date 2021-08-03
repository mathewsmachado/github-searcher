import { ReactElement } from 'react';
import { render as rawRender } from '@testing-library/react';

import { StyleProvider } from 'styles/StyleProvider';

export function render(ui: ReactElement) {
  return rawRender(<StyleProvider>{ui}</StyleProvider>);
}

export { screen } from '@testing-library/react';
