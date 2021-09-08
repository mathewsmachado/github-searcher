/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css, DefaultTheme } from 'styled-components';

export type SecondaryHeadingProps = {
  size?: 'huge' | 'xlarge';
  thin?: boolean;
};

export const SecondaryHeading = styled.h2<SecondaryHeadingProps>`
  ${({ theme, size = 'huge', thin = false }) => css`
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

export { SecondaryHeading as SecondaryHeadingWrapper };
