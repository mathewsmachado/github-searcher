import styled, { css } from 'styled-components';

export type Props = {
  type: 'single' | 'double' | 'doubleComposed';
};

export const SearchInputWrapper = styled.div<Props>`
  ${({ type }) => css`
    width: 100%;
    display: flex;
    align-items: center;

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
      width: 100%;
      display: flex;
      align-items: center;
    }
  `,
};
