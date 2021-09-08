/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css, DefaultTheme } from 'styled-components';

export type PrimaryHeadingProps = {
  color?: 'primary' | 'accent';
  unfilled?: boolean;
};

export const PrimaryHeading = styled.h1<PrimaryHeadingProps>`
  ${({ theme, color = 'primary', unfilled = false }) => css`
    font-size: ${theme.font.size.xhuge};
    color: ${theme.color[color!]};

    ${unfilled && modifiers.unfilled(theme)}
  `};
`;

const modifiers = {
  unfilled: (theme: DefaultTheme) => css`
    color: ${theme.color.secondary};
    -webkit-text-stroke: 2px ${theme.color.primary};
  `,
};

export { PrimaryHeading as PrimaryHeadingWrapper };
