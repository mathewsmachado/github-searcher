/* eslint-disable @typescript-eslint/no-use-before-define */
import { ButtonHTMLAttributes } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  minimal?: boolean;
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, color = 'accent', size = 'small', minimal = false }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 0.2rem;
    border-style: solid;
    border-radius: ${theme.border.radius.large};
    box-shadow: 0.2rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    transition: all ${theme.transition.fast};

    &:disabled {
      cursor: not-allowed;
    }

    ${!!size && modifiers[size!]()};
    ${!!color && modifiers[color](theme)};
    ${minimal && modifiers.minimal()};
  `};
`;

const modifiers = {
  small: () => css`
    width: 4rem;
    height: 4rem;
  `,
  medium: () => css`
    width: 5.2rem;
    height: 5.2rem;
  `,
  large: () => css`
    width: 6.4rem;
    height: 6.4rem;
  `,
  primary: (theme: DefaultTheme) => css`
    border-color: ${theme.color.primary};
    background-color: ${theme.color.primary};

    &:active {
      box-shadow: 0.2rem 0.4rem 0.8rem -0.2rem rgba(0, 0, 0, 0.7);
    }
  `,
  accent: (theme: DefaultTheme) => css`
    border-color: ${theme.color.accent};
    background-color: ${theme.color.accent};

    &:active {
      box-shadow: 0.2rem 0.4rem 0.8rem -0.2rem rgba(255, 0, 127, 0.7);
    }
  `,
  minimal: () => css`
    background-color: transparent;
  `,
};

export { Button as ButtonWrapper };
