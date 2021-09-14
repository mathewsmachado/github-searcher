/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css } from 'styled-components';

export type OverlayProps = {
  isVisible: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  ${({ theme, isVisible }) => css`
    position: fixed;
    inset: 0;
    z-index: ${theme.layer.base};
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(0.1rem);

    ${!isVisible && modifiers.hide()};
  `};
`;

const modifiers = {
  hide: () => css`
    opacity: 0;
  `,
};

export { Overlay as OverlayWrapper };
