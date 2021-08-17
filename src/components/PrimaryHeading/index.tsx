/* eslint-disable @typescript-eslint/no-use-before-define */
import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = {
  color?: 'primary' | 'accent';
  unfilled?: boolean;
};

type PrimaryHeadingProps = WrapperProps & {
  children: string;
};

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, color, unfilled }) => css`
    font-size: ${theme.font.size.xhuge};
    color: ${theme.color[color!]};

    ${unfilled && modifiers.unfilled(theme)}
  `};
`;

const modifiers = {
  unfilled: (theme: DefaultTheme) => css`
    color: ${theme.color.secondary};
    -webkit-text-stroke: 2px ${theme.color.primary};
  `,
};

export function PrimaryHeading({
  children,
  color = 'primary',
  unfilled = false,
}: PrimaryHeadingProps) {
  return (
    <Wrapper color={color} unfilled={unfilled}>
      {children}
    </Wrapper>
  );
}
