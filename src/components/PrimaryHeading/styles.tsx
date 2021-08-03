import styled, { css, DefaultTheme } from 'styled-components';

import { WrapperProps } from './types';

const modifiers = {
  unfilled: (theme: DefaultTheme) => css`
    color: ${theme.color.secondary};
    -webkit-text-stroke: 2px ${theme.color.primary};
  `,
};

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, color, unfilled }) => css`
    font-size: ${theme.font.size.xhuge};
    color: ${theme.color[color!]};

    ${unfilled && modifiers.unfilled(theme)}
  `};
`;
