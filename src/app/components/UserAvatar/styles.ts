import styled, { css, DefaultTheme } from 'styled-components';

export type Props = {
  size?: 'small' | 'large';
  target?: '_blank';
  href?: string;
};

export const UserAvatarWrapper = styled.div<Props>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;

    ${modifiers[size!](theme)};
  `};
`;

export const Image = styled.img`
  ${({ theme }) => css`
    border-style: solid;
    border-color: ${theme.color.accent};
    border-radius: ${theme.border.radius.rounded};
  `};
`;

export const TextWrapper = styled.div``;

export const Name = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.xbold};
    color: ${theme.color.accent};
  `};
`;

export const Username = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xsmall};
    color: ${theme.color.accent};
  `};
`;

export const Bio = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xsmall};
    color: ${theme.color.secondary};
  `};
`;

const modifiers = {
  small: () => css`
    flex-direction: row;
    text-align: start;

    ${Image} {
      max-width: 6rem;
      border-width: 0.2rem;
    }

    ${TextWrapper} {
      display: flex;
      flex-direction: column;
      margin-left: 1.2rem;
    }

    ${Name} {
      margin-top: 0;
      font-size: 2.6rem;
    }

    ${Bio} {
      margin-top: 0;
    }
  `,
  large: (theme: DefaultTheme) => css`
    flex-direction: column;
    text-align: center;

    ${Image} {
      max-width: 16rem;
      border-width: 0.4rem;
    }

    ${Name} {
      margin-top: ${theme.spacing.xxsmall};
      font-size: ${theme.font.size.large};
    }

    ${Bio} {
      margin-top: ${theme.spacing.xsmall};
    }
  `,
};
