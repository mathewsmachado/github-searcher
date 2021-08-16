import styled, { css, DefaultTheme } from 'styled-components';

export type WrapperProps = {
  size?: 'huge' | 'xlarge';
  thin?: boolean;
};

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, size, thin }) => css`
    color: ${theme.color.primary};
    font-size: ${theme.font.size[size!]};
    font-weight: ${theme.font.weight.bold};

    ${thin && modifiers.thin(theme)}
  `};
`;

const modifiers = {
  thin: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.weight.normal};
  `,
};
