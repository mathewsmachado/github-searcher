import styled, { css, DefaultTheme } from 'styled-components';

export type AllowedSizes = 'medium' | 'xlarge';

export type Props = {
  hasMultipleIcons: boolean;
  mostInner: boolean;
  size?: AllowedSizes;
};

export const SocialMediaIconsWrapper = styled.div<Props>`
  ${({ theme, hasMultipleIcons, mostInner, size }) => css`
    text-align: center;
    font-size: ${theme.font.size.small};
    color: ${theme.color.secondary};

    ${size === 'medium' && modifiers.medium(theme)}
    ${mostInner && modifiers.mostInner()}
    ${hasMultipleIcons && modifiers.hasMultipleIcons()}
  `};
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.a`
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacing.xxsmall};
  `};
`;

const modifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xsmall};
  `,
  hasMultipleIcons: () => css`
    justify-content: space-between;
  `,
  mostInner: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
