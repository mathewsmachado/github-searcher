import styled, { css } from 'styled-components';

import { Wrapper as GithubSearcherIcon } from 'components/GithubSearcherIcon/styles';

export type WrapperProps = {
  icon?: boolean;
  error?: string;
};

const wrapperModifiers = {
  icon: () => css`
    padding: 0 0 0 1rem;

    ${GithubSearcherIcon} {
      &,
      & > * {
        width: 5.5rem;
      }
    }

    ${InputField} {
      padding-left: 0;
      margin-left: -0.4rem;
    }
  `,
  error: () => css`
    border-color: red;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, icon, error }) => css`
    display: flex;
    align-items: center;
    border: 1px solid ${theme.color.primary};
    border-radius: ${theme.border.radius.medium};

    ${icon && wrapperModifiers.icon()}
    ${error && wrapperModifiers.error()}
  `};
`;

export const InputField = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    font-family: ${theme.font.family.secondary};
    background: transparent;
    border: none;
    outline: none;
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    margin-top: 0.5rem;
    margin-left: 0.3rem;
    font-size: ${theme.font.size.xsmall};
    color: red;
  `}
`;
