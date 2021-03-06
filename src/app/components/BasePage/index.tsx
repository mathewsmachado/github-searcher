// @ts-nocheck
/* eslint-disable @typescript-eslint/no-shadow */
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { theme } from 'app/styles';
import { BannerNote, Footer, Menu } from 'app/components';
// error if importing them from 'app/components'
import { MenuHeight } from 'app/components/Menu';
import { FooterHeight } from 'app/components/Footer';

export type BasePageProps = {
  children: ReactNode;
};

const BasePageContentHeight = `calc(100vh - (${MenuHeight} + ${FooterHeight}))`;
export const BasePageContentInnerHeight = `calc(${BasePageContentHeight} - (${theme.spacing.medium} * 2))`;

export const BasePageContentWrapper = styled.div`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto;
    min-height: ${BasePageContentHeight};
    max-width: 1400px;
    padding: ${theme.spacing.medium} ${theme.spacing.xlarge};
    background-color: ${theme.color.secondary};

    ${theme.media.below('medium')`
      padding: ${theme.spacing.medium} ${theme.spacing.medium};
    `};

    ${theme.media.below('small')`
      padding: ${theme.spacing.medium} ${theme.spacing.xxsmall};
    `};
  `};
`;

export function BasePage({ children }: BasePageProps) {
  return (
    <>
      <BannerNote text='This site is under development, new features and bug corrections coming soon ✨' />
      <Menu />
      <BasePageContentWrapper>{children}</BasePageContentWrapper>
      <Footer />
    </>
  );
}
