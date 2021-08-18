import styled, { css } from 'styled-components';

import { GithubSearcherIconWrapper } from 'components/GithubSearcherIcon';

export type Props = {
  error?: string;
};

export const Wrapper = styled.div<Props>`
  ${({ theme, error }) => css`
    display: flex;
    align-items: center;
    border: 1px solid ${theme.color.primary};
    border-radius: ${theme.border.radius.medium};

    ${error && modifiers.error()}
  `};
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0.15rem 0 0 0.6rem;
    padding-right: 0.5rem;
    border-right: 0.1rem solid ${theme.color.primary};

    ${GithubSearcherIconWrapper} {
      height: 2.6rem;
    }
  `};
`;

export const InputField = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 1rem 1rem 0.8rem;
    font-family: ${theme.font.family.secondary};
    background: transparent;
    border: none;
    outline: none;
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    display: block;
    margin: 0.5rem 0 0 0.3rem;
    font-size: ${theme.font.size.xsmall};
    color: red;
  `}
`;

const modifiers = {
  error: () => css`
    border-color: red;

    ${IconWrapper} {
      border-color: red;
    }
  `,
};
