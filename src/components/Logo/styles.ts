import styled, { css } from 'styled-components';

import { PrimaryHeadingWrapper } from 'components/PrimaryHeading';

export type Props = {
  size?: 'small' | 'medium' | 'large';
};

const modifiers = {
  medium: () => css`
    align-items: baseline;

    ${PrimaryHeadingWrapper} {
      font-size: 5rem;
    }

    ${Github} {
      max-width: 15rem;
    }
  `,
  large: () => css`
    display: block;

    ${PrimaryHeadingWrapper} {
      font-size: 7rem;
      line-height: 7rem;
    }

    ${Github} {
      max-width: 22.5rem;
    }
  `,
};

export const Wrapper = styled.div<Props>`
  ${({ size }) => css`
    display: flex;
    align-items: center;

    ${PrimaryHeadingWrapper} {
      font-size: 2.7rem;
      margin-left: 0.4rem;
    }

    ${size !== 'small' && modifiers[size!]()}
  `};
`;

export const Github = styled.svg`
  max-width: 7.5rem;
`;
