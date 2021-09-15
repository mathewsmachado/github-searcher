import { ReactNode } from 'react';
import styled from 'styled-components';

import { Footer, FooterHeight } from 'components/Footer';
import { Menu, MenuHeight } from 'components/Menu';

export type BaseProps = {
  children: ReactNode;
};

export const BaseContentHeight = `calc(100vh - (${MenuHeight} + ${FooterHeight}))`;

export const BaseContentWrapper = styled.div`
  min-height: ${BaseContentHeight};
`;

export function Base({ children }: BaseProps) {
  return (
    <>
      <Menu />
      <BaseContentWrapper>{children}</BaseContentWrapper>
      <Footer />
    </>
  );
}
