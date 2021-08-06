import styled, { css } from 'styled-components';

type LineSeparatorProps = {
  color?: 'primary' | 'accent';
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'regular' | 'bold';
};

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

export const LineSeparator = styled.div<LineSeparatorProps>`
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
