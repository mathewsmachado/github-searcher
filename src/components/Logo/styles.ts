import styled, { css } from 'styled-components';

import { Wrapper as PrimaryHeading } from 'components/PrimaryHeading/styles';

import { ComponentsProps } from './types';

const wrapperModifiers = {
  medium: () => css`
    align-items: baseline;

    ${PrimaryHeading} {
      font-size: 5rem;
    }
  `,
  large: () => css`
    display: block;

    ${PrimaryHeading} {
      font-size: 7rem;
      line-height: 7rem;
    }
  `,
};

export const Wrapper = styled.div<ComponentsProps>`
  ${({ size }) => css`
    display: flex;
    align-items: center;

    ${PrimaryHeading} {
      font-size: 2.7rem;
      margin-left: 0.4rem;
    }

    ${size !== 'small' && wrapperModifiers[size!]()}
  `};
`;

const svgModifiers = {
  medium: () => css`
    max-width: 15rem;
  `,
  large: () => css`
    max-width: 22.5rem;
  `,
};

export const Svg = styled.img<ComponentsProps>`
  ${({ size }) => css`
    max-width: 7.5rem;

    ${size !== 'small' && svgModifiers[size!]()}
  `}
`;
