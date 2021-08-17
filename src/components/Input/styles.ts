import styled, { css } from 'styled-components';

import { Wrapper as GithubSearcherIcon } from 'components/GithubSearcherIcon';

export type Props = {
  icon?: boolean;
  error?: string;
};

export const Wrapper = styled.div<Props>`
  ${({ theme, icon, error }) => css`
    display: flex;
    align-items: center;
    border: 1px solid ${theme.color.primary};
    border-radius: ${theme.border.radius.medium};

    ${icon && modifiers.icon()}
    ${error && modifiers.error()}
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

const modifiers = {
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
