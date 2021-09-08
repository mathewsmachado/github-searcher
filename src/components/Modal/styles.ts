// @ts-nocheck
import styled, { css, DefaultTheme } from 'styled-components';

import { CardWrapper } from 'components/Card';
import { CloseButtonWrapper } from 'components/CloseButton';
import { VsSeparatorWrapper } from 'components/VsSeparator';

export type Single = 'single';
export type Double = 'double';

export type Props = {
  isOpen: boolean;
  type?: Single | Double;
};

export const Overlay = styled.div<Props>`
  ${({ theme, isOpen, type }) => css`
    position: relative;
    min-height: 100vh;
    display: flex;
    overflow-y: auto;
    align-items: center;
    padding: ${theme.spacing.small};
    background-color: rgba(0, 0, 0, 0.2);
    transition: transform ${theme.transition.fast},
      opacity ${theme.transition.fast};

    ${VsSeparatorWrapper} {
      max-width: 12rem;
      min-width: 4rem;
      width: 20%;
      margin: 0 ${theme.spacing.small};
    }

    ${theme.media.below('medium')`
      ${VsSeparatorWrapper} {
        max-width: 40rem;
        width: 80%;
        margin: ${theme.spacing.small} 0;
      }
    `};

    ${modifiers[type](theme)};
    ${!isOpen && modifiers.close()};
  `};
`;

export const ModalWrapper = styled(CardWrapper)`
  ${({ theme }) => css`
    position: relative;
    max-width: 70rem;
    width: 100%;
    color: ${theme.color.secondary};
    box-shadow: rgba(0, 0, 0, 0.35) 0 0.5rem 1.5rem;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0 0.5rem 1.5rem;
    }

    ${CloseButtonWrapper} {
      position: absolute;
      right: ${theme.spacing.xsmall};
    }
  `};
`;

const modifiers = {
  single: () => css`
    justify-content: center;
  `,
  double: (theme: DefaultTheme) => css`
    justify-content: space-between;

    ${ModalWrapper} {
      max-width: 48rem;
    }

    ${theme.media.below('medium')`
      flex-direction: column;
    `};
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};
