import { ReactNode } from 'react';
import styled from 'styled-components';

import { Footer, FooterHeight } from 'components/Footer';
import { Menu, MenuHeight } from 'components/Menu';

export type PageBaseProps = {
  children: ReactNode;
};

export const PageBaseContentHeight = `calc(100vh - (${MenuHeight} + ${FooterHeight}))`;

export const PageBaseContentWrapper = styled.div`
  min-height: ${PageBaseContentHeight};
`;

export function PageBase({ children }: PageBaseProps) {
  return (
    <>
      <Menu />
      <PageBaseContentWrapper>{children}</PageBaseContentWrapper>
      <Footer
        text='Mathews Machado, 2021'
        usernames={{ github: 'mathewsmachado', linkedin: 'mathewsmachado' }}
      />
    </>
  );
}
