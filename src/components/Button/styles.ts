import styled, { css, DefaultTheme } from 'styled-components';

import { WrapperProps } from './types';

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    border: 0.2rem solid ${theme.color.primary};
    background-color: ${theme.color.primary};

    &:active {
      box-shadow: 0.2rem 0.4rem 0.8rem -0.2rem rgba(0, 0, 0, 0.7);
    }
  `,
  minimal: () => css`
    background-color: transparent;
  `,
  medium: (theme: DefaultTheme, isChildrenText: boolean) => css`
    min-width: 5.2rem;
    min-height: 5.2rem;

    ${isChildrenText &&
    css`
      padding: ${theme.spacing.small} 8rem;
    `};
  `,
  large: (theme: DefaultTheme, isChildrenText: boolean) => css`
    min-width: 6.4rem;
    min-height: 6.4rem;

    ${isChildrenText &&
    css`
      padding: ${theme.spacing.medium} 11rem;
      font-size: ${theme.font.size.medium};
    `};
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, size, minimal, isChildrenText }) => css`
    min-width: 4rem;
    min-height: 4rem;
    display: flex;
    align-items: center;
    padding: 0.6rem;
    padding-top: 0.9rem;
    background-color: ${theme.color.accent};
    border-radius: ${theme.border.radius.large};
    border: 0.2rem solid ${theme.color.accent};
    box-shadow: 0.2rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    transition: all ${theme.transition.fast};

    &:active {
      box-shadow: 0.2rem 0.4rem 0.8rem -0.2rem rgba(255, 0, 127, 0.7);
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${isChildrenText &&
    css`
      padding: 2rem ${theme.spacing.large};
      font-size: ${theme.font.size.small};
      font-weight: ${theme.font.weight.bold};
      color: ${theme.color.secondary};
    `};

    ${color === 'primary' && modifiers.primary(theme)};
    ${minimal && modifiers.minimal()};
    ${size !== 'small' && modifiers[size!](theme, isChildrenText)};
  `};
`;
