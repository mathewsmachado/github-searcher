// @ts-nocheck
/* eslint-disable @typescript-eslint/no-shadow */
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { theme } from 'styles/theme';
import { Footer, FooterHeight } from 'components/Footer';
import { Menu, MenuHeight } from 'components/Menu';

export type BaseProps = {
  children: ReactNode;
};

const topBottomPadding = theme.spacing.medium;

export const BaseContentHeight = `calc(100vh - (${MenuHeight} + ${FooterHeight}))`;
export const BaseContentInnerHeight = `calc(${BaseContentHeight} - (${topBottomPadding} * 2))`;

export const BaseContentWrapper = styled.div`
  ${({ theme }) => css`
    min-height: ${BaseContentHeight};
    padding: ${topBottomPadding} ${theme.spacing.xlarge};
    background-color: ${theme.color.secondary};

    ${theme.media.below('medium')`
      padding: ${topBottomPadding} ${theme.spacing.medium};
    `};

    ${theme.media.below('small')`
      padding: ${topBottomPadding} ${theme.spacing.xxsmall};
    `};
  `};
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
