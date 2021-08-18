/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css, DefaultTheme } from 'styled-components';

type Props = {
  size?: 'huge' | 'xlarge';
  thin?: boolean;
};

export const SecondaryHeading = styled.h2<Props>`
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
