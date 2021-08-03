import styled, { css, DefaultTheme } from 'styled-components';

import { WrapperProps } from './types';

const modifiers = {
  thin: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xlarge};
    font-weight: ${theme.font.weight.normal};
  `,
};

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, thin, size }) => css`
    color: ${theme.color.primary};
    font-size: ${theme.font.size[size!]};
    font-weight: ${theme.font.weight.bold};

    ${thin && modifiers.thin(theme)}
  `};
`;
