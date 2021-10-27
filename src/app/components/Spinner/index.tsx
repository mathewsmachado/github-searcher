import styled, { css, keyframes } from 'styled-components';

export type SpinnerProps = {
  color?: 'primary' | 'secondary' | 'accent';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
};

const modifiers = {
  xsmall: () => css`
    width: 2rem;
    height: 2rem;
  `,
  small: () => css`
    width: 4rem;
    height: 4rem;
  `,
  medium: () => css`
    width: 6rem;
    height: 6rem;
  `,
  large: () => css`
    width: 8rem;
    height: 8rem;
  `,
  xlarge: () => css`
    width: 10rem;
    height: 10rem;
  `,
};

const rotate = keyframes`
  from { transform: rotate(0) }
  to { transform: rotate(360deg) }
`;

export const Spinner = styled.div<SpinnerProps>`
  ${({ theme, color = 'accent', size = 'small' }) => css`
    border-radius: 50%;
    border-width: 0.2rem;
    border-style: solid;
    border-color: ${theme.color[color!]};
    border-bottom: 0.2rem solid transparent;
    animation: 500ms ${rotate} linear infinite;

    ${modifiers[size!]()};
  `};
`;
