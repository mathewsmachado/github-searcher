import styled, { css } from 'styled-components';

type WrapperProps = {
  type?: 'single' | 'double' | 'doubleComposed';
};

export const Wrapper = styled.div<WrapperProps>`
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
