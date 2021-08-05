import styled, { css, DefaultTheme } from 'styled-components';

import { WrapperProps, IconsWrapperProps } from './types';

const modifiers = {
  wrapper: {
    medium: (theme: DefaultTheme) => css`
      font-size: ${theme.font.size.xsmall};
    `,
  },
  iconsWrapper: {
    hasMultipleIcons: () => css`
      justify-content: space-between;
    `,
  },
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size }) => css`
    text-align: center;
    font-size: ${theme.font.size.small};
    color: ${theme.color.secondary};

    ${size === 'medium' && modifiers.wrapper.medium(theme)}
  `};
`;

export const IconsWrapper = styled.div<IconsWrapperProps>`
  ${({ hasMultipleIcons }) => css`
    display: flex;
    justify-content: center;

    ${hasMultipleIcons && modifiers.iconsWrapper.hasMultipleIcons()};
  `};
`;

export const IconWrapper = styled.a``;

export const Label = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacing.xxsmall};
  `};
`;
