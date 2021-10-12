import styled, { css } from 'styled-components';

export type OverlayProps = {
  isVisible: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  ${({ theme, isVisible }) => css`
    position: fixed;
    inset: 0;
    z-index: ${theme.layer.base};
    background-color: rgba(220, 220, 200, 0.3);
    backdrop-filter: blur(0.1rem);
    pointer-events: auto;

    ${!isVisible && modifiers.hide()};
  `};
`;

const modifiers = {
  hide: () => css`
    opacity: 0;
    pointer-events: none;
  `,
};

export { Overlay as OverlayWrapper };
