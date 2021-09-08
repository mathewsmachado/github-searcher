import styled, { css } from 'styled-components';

export type Single = 'single';
export type Double = 'double';
export type DoubleComposed = 'doubleComposed';

type Props = {
  type?: Single | Double | DoubleComposed;
};

export const SearchInputWrapper = styled.div<Props>`
  ${({ type }) => css`
    display: flex;
    align-items: center;
    max-width: 53rem;

    ${type === 'doubleComposed' && modifiers.doubleComposed()};
  `};
`;

export const InputWrapper = styled.div``;

export const Separator = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.normal};
    margin: 0 ${theme.spacing.xxsmall};
  `};
`;

const modifiers = {
  doubleComposed: () => css`
    flex-direction: column;

    ${InputWrapper} {
      display: flex;
      align-items: center;
    }
  `,
};
