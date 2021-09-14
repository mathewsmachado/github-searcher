// @ts-nocheck
import styled, { css, DefaultTheme } from 'styled-components';

import { CardWrapper } from 'components/Card';
import { CloseButtonWrapper } from 'components/CloseButton';
import { VsSeparatorWrapper } from 'components/VsSeparator';
import { OverlayWrapper } from 'components/Overlay';

export type Props = {
  isOpen: boolean;
  type?: 'single' | 'double';
};

export const ModalWrapper = styled.div<Props>`
  ${({ theme, isOpen, type }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transform: translateX(0rem);
    padding: ${theme.spacing.small};
    transition: all ${theme.transition.default};

    ${OverlayWrapper} {
      transition: all ${theme.transition.fast};
    }

    ${VsSeparatorWrapper} {
      max-width: 6rem;
      min-width: 4rem;
      z-index: ${theme.layer.modal};
      margin: 0 ${theme.spacing.small};
    }

    ${theme.media.below('medium')`
      ${VsSeparatorWrapper} {
        max-width: 30rem;
        margin: ${theme.spacing.small} 0;
      }
    `};

    ${type === 'double' && modifiers.double(theme)};
    ${!isOpen && modifiers.close()};
  `};
`;

export const ModalContentWrapper = styled(CardWrapper)`
  ${({ theme }) => css`
    position: relative;
    min-height: unset;
    max-width: 70rem;
    width: 100%;
    z-index: ${theme.layer.modal};
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
  double: (theme: DefaultTheme) => css`
    ${ModalContentWrapper} {
      max-width: 48rem;
    }

    ${theme.media.below('medium')`
      height: unset;
      flex-direction: column;
    `};
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};
