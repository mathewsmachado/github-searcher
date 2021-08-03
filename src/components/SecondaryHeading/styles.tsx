import styled, { css, DefaultTheme } from 'styled-components';

import { WrapperProps } from './types';

const modifiers = {
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.huge};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xlarge};
  `,
  thin: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xlarge};
    font-weight: ${theme.font.weight.normal};
  `,
};

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, thin, size }) => css`
    color: ${theme.color.primary};
    font-weight: ${theme.font.weight.bold};

    ${!!size && modifiers[size](theme)}
    ${thin && modifiers.thin(theme)}
  `};
`;
