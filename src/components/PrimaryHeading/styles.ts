import styled, { css, DefaultTheme } from 'styled-components';

export type WrapperProps = {
  color?: 'primary' | 'accent';
  unfilled?: boolean;
};

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, color, unfilled }) => css`
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
