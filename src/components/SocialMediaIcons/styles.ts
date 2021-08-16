import styled, { css, DefaultTheme } from 'styled-components';

export type AllowedSizes = 'medium' | 'xlarge';

export type WrapperProps = {
  hasMultipleIcons: boolean;
  size?: AllowedSizes;
};

const modifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xsmall};
  `,
  hasMultipleIcons: () => css`
    ${IconsWrapper} {
      justify-content: space-between;
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size, hasMultipleIcons }) => css`
    text-align: center;
    font-size: ${theme.font.size.small};
    color: ${theme.color.secondary};

    ${size === 'medium' && modifiers.medium(theme)}
    ${hasMultipleIcons && modifiers.hasMultipleIcons()}
  `};
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.a``;

export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacing.xxsmall};
  `};
`;
