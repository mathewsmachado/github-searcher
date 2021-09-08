/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css, DefaultTheme } from 'styled-components';

import { Button, ButtonProps } from 'components/Button';

export type TextButtonProps = ButtonProps & {
  children: string;
};

// the unused vars are necessary because they're defining default values to the
// component props
export const TextButton = styled(Button)<TextButtonProps>`
  ${({ theme, size = 'small', color = 'accent', minimal = false }) => css`
    width: unset;
    height: unset;
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.color.secondary};

    ${!!size && modifiers[size](theme)};
  `};
`;

const modifiers = {
  small: (theme: DefaultTheme) => css`
    min-width: 4rem;
    min-height: 4rem;
    padding: 2rem ${theme.spacing.large};
  `,
  medium: (theme: DefaultTheme) => css`
    min-width: 5.2rem;
    min-height: 5.2rem;
    padding: ${theme.spacing.small} 8rem;
  `,
  large: (theme: DefaultTheme) => css`
    min-width: 6.4rem;
    min-height: 6.4rem;
    padding: ${theme.spacing.medium} 11rem;
    font-size: ${theme.font.size.medium};
  `,
};

export { TextButton as TextButtonWrapper };
