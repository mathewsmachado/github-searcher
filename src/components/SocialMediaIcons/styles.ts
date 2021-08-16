import styled, { css, DefaultTheme } from 'styled-components';

export type AllowedSizes = 'medium' | 'xlarge';

export type WrapperProps = {
  size?: AllowedSizes;
};

type IconsWrapperProps = {
  hasMultipleIcons: boolean;
};

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xsmall};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    text-align: center;
    font-size: ${theme.font.size.small};
    color: ${theme.color.secondary};

    ${size === 'medium' && wrapperModifiers.medium(theme)}
  `};
`;

const iconsWrapperModifiers = {
  hasMultipleIcons: () => css`
    justify-content: space-between;
  `,
};

export const IconsWrapper = styled.div<IconsWrapperProps>`
  ${({ hasMultipleIcons }) => css`
    display: flex;
    justify-content: center;

    ${hasMultipleIcons && iconsWrapperModifiers.hasMultipleIcons()};
  `};
`;

export const IconWrapper = styled.a``;

export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacing.xxsmall};
  `};
`;
