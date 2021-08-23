// @ts-nocheck
import styled, { css } from 'styled-components';

import { Card } from 'components/Card';
import { CloseButtonWrapper } from 'components/CloseButton';

export type Props = {
  isOpen: boolean;
};

export const Overlay = styled.div<Props>`
  ${({ theme, isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: transform ${theme.transition.fast},
      opacity ${theme.transition.fast};

    ${!isOpen && modifiers.close()}
  `};
`;

export const ContentWrapper = styled(Card)`
  ${({ theme }) => css`
    position: absolute;
    max-width: 70rem;
    width: 100%;
    color: ${theme.color.secondary};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    ${CloseButtonWrapper}:first-of-type {
      position: absolute;
      right: ${theme.spacing.small};
    }
  `};
`;

const modifiers = {
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2em);
  `,
};
