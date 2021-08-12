import styled, { css, DefaultTheme } from 'styled-components';

import { WrapperProps } from './types';

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.color.primary};
    background-color: ${theme.color.primary};
    box-shadow: 0.2rem 0.4rem 0.8rem -0.2rem rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
    }

    &:active {
      box-shadow: 0.2rem 0.4rem 0.8rem -0.2rem rgba(0, 0, 0, 0.7);
    }

    &:disabled {
      background-color: ${theme.color.primary};
      box-shadow: 0.2rem 0.4rem 0.8rem -0.2rem rgba(0, 0, 0, 0.25);
    }
  `,
  minimal: () => css`
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    &:disabled {
      background-color: transparent;
    }
  `,
  medium: () => css`
    min-width: 52px;
    min-height: 52px;
  `,
  large: () => css`
    min-width: 64px;
    min-height: 64px;
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, color, size, minimal }) => css`
    min-width: 40px;
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 4px;
    padding-top: 6px;
    border: 2px solid ${theme.color.accent};
    border-radius: ${theme.border.radius.large};
    background-color: ${theme.color.accent};
    box-shadow: 0.2rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    transition: all ${theme.transition.fast};

    &:hover {
      background-color: rgba(255, 0, 127, 0.9);
    }

    &:active {
      box-shadow: 0.2rem 0.4rem 0.8rem -0.2rem rgba(255, 0, 127, 0.7);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.color.accent};
      box-shadow: 0.2rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    }

    ${color !== 'accent' && modifiers.primary(theme)}
    ${minimal && modifiers.minimal()}
    ${size !== 'small' && modifiers[size!]()}
  `}
`;
