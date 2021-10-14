import styled, { css } from 'styled-components';

import {
  CardWrapper,
  CloseButtonWrapper,
  OverlayWrapper,
} from 'app/components';

export type Props = {
  isOpen: boolean;
};

export const ModalWrapper = styled.div<Props>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing.small};
    transition: all ${theme.transition.default};
    z-index: ${theme.layer.modal};

    ${OverlayWrapper} {
      transition: all ${theme.transition.fast};
    }

    ${!isOpen && modifiers.close()};
  `};
`;

export const ModalContentWrapper = styled(CardWrapper)`
  ${({ theme }) => css`
    position: relative;
    max-width: 70rem;
    width: 100%;
    z-index: ${theme.layer.modal};
    color: ${theme.color.secondary};
    box-shadow: rgba(0, 0, 0, 0.35) 0 0.5rem 1.5rem;

    ${CloseButtonWrapper} {
      position: absolute;
      right: ${theme.spacing.xsmall};
    }
  `};
`;

const modifiers = {
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
};
