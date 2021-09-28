import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { StyleProvider } from 'app/styles';

function customRender(
  ui: ReactElement,
  testid?: string,
  options?: Omit<RenderOptions, 'queries'>
) {
  let component = <StyleProvider>{ui}</StyleProvider>;

  if (testid) {
    component = (
      <StyleProvider>
        <div data-testid={`${testid}`}>{ui}</div>
      </StyleProvider>
    );
  }

  return render(component, { ...options });
}

export * from '@testing-library/react';
export { screen as s } from '@testing-library/react';
export { customRender as render };
