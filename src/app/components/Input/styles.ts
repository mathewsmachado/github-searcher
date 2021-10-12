import styled, { css, DefaultTheme } from 'styled-components';

export type Props = {
  error?: string;
};

export const InputWrapper = styled.div<Props>`
  ${({ theme, error }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${!!error && modifiers.error(theme)}
  `};
`;

export const InputField = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 1rem 1rem 0.8rem;
    font-family: ${theme.font.family.secondary};
    background: transparent;
    border: 1px solid ${theme.color.primary};
    border-radius: ${theme.border.radius.medium};
    outline: none;
  `}
`;

export const ErrorText = styled.span``;

const modifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputField} {
      border-color: red;
    }

    ${ErrorText} {
      margin: 0.5rem 0 0 0.3rem;
      font-size: ${theme.font.size.xsmall};
      color: red;
    }
  `,
};
