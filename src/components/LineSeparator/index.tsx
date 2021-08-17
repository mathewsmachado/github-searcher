/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css } from 'styled-components';

type Props = {
  color?: 'primary' | 'accent';
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'regular' | 'bold';
};

export const LineSeparator = styled.div<Props>`
  ${({
    theme,
    color = 'accent',
    orientation = 'horizontal',
    thickness = 'bold',
  }) => css`
    height: 0.6rem;
    background-color: ${theme.color[color!]};

    ${orientation === 'vertical' && modifiers.vertical()}
    ${thickness !== 'bold' && modifiers[thickness]()}
  `};
`;

const modifiers = {
  thin: () => css`
    height: 0.1rem;
  `,
  regular: () => css`
    height: 0.4rem;
  `,
  vertical: () => css`
    transform: rotate(90deg);
  `,
};
