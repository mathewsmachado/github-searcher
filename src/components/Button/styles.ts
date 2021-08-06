import styled, { css, DefaultTheme } from 'styled-components';

import { WrapperProps } from './types';

const modifiers = {
  accent: (theme: DefaultTheme) => css`
    background-color: ${theme.color.accent};
    box-shadow: 0.2rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: rgba(255, 0, 127, 0.9);
    }

    &:active {
      box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.2) inset,
        0.4rem 0rem 0.4rem 0rem rgba(0, 0, 0, 0.2) inset;
    }

    &:disabled {
      background-color: ${theme.color.accent};
    }
  `,
  small: (theme: DefaultTheme) => css`
    padding: 2rem ${theme.spacing.large};
    font-size: ${theme.font.size.small};
  `,
  medium: (theme: DefaultTheme) => css`
    padding: ${theme.spacing.small} 8rem;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, size }) => css`
    padding: ${theme.spacing.medium} 11rem;
    font-size: ${theme.font.size.medium};
    font-weight: ${theme.font.weight.bold};
    border: none;
    border-radius: ${theme.border.radius.large};
    color: ${theme.color.secondary};
    background-color: ${theme.color.primary};
    box-shadow: 0.2rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    transition: all ${theme.transition.fast};

    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
    }

    &:active {
      box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(255, 255, 255, 0.2) inset,
        0.4rem 0rem 0.4rem 0rem rgba(255, 255, 255, 0.2) inset;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.color.primary};
    }

    ${size !== 'large' && modifiers[size!](theme)};
    ${color === 'accent' && modifiers.accent(theme)};
  `};
`;
