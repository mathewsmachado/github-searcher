import styled, { css } from 'styled-components';

export type Props = {
  size?: 'small' | 'medium' | 'large';
  githubColor?: 'primary' | 'secondary';
};

export const Wrapper = styled.a<Props>`
  ${({ theme, size, githubColor }) => css`
    display: flex;

    ${!!githubColor && modifiers.color(theme.color[githubColor])};
    ${!!size && modifiers[size!]()};
  `};
`;

export const Github = styled.svg`
  width: 100%;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    margin-left: 0.4rem;
    color: ${theme.color.accent};
  `};
`;

const modifiers = {
  color: (githubColor: string) => css`
    ${Github} {
      fill: ${githubColor};
    }
  `,

  small: () => css`
    align-items: center;

    ${Github} {
      max-width: 7.5rem;
    }

    ${Heading} {
      font-size: 2.7rem;
    }
  `,
  medium: () => css`
    align-items: baseline;

    ${Github} {
      max-width: 15rem;
    }

    ${Heading} {
      font-size: 5rem;
    }
  `,
  large: () => css`
    display: block;

    ${Github} {
      max-width: 22.5rem;
    }

    ${Heading} {
      font-size: 7rem;
      line-height: 7rem;
    }
  `,
};
