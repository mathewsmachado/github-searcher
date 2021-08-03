import styled, { css } from 'styled-components';

type LineSeparatorProps = {
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'regular';
};

const modifiers = {
  thin: () => css`
    height: 0.4rem;
  `,
  vertical: () => css`
    transform: rotate(90deg);
  `,
};

export const LineSeparator = styled.div<LineSeparatorProps>`
  ${({ theme, orientation = 'horizontal', thickness = 'regular' }) => css`
    height: 0.6rem;
    background-color: ${theme.color.accent};

    ${orientation === 'vertical' && modifiers.vertical()}
    ${thickness === 'thin' && modifiers.thin()}
  `};
`;
