// @ts-nocheck
import styled, { css } from 'styled-components';

import { ModalContentWrapper } from 'components/Modal';

type Props = { type: 'single' | 'double' | undefined };

export const ModalResultWrapper = styled.div<Props>`
  ${({ type }) => css`
    width: 100%;
    margin: 0 auto;

    ${type === 'single' && modifiers.single()};
  `};
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacing.small} 0;
  `};
`;

export const AvatarWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 4rem;

    ${theme.media.below('small')`
      padding: 0 2rem;
    `};
  `};
`;

export const StatusWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;

    ${theme.media.below('small')`
      padding: 4rem 1rem;
    `};
  `};
`;

const modifiers = {
  single: () => css`
    ${ModalContentWrapper} {
      max-width: 50rem;
    }
  `,
};
