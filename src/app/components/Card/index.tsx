import styled, { css } from 'styled-components';

export const Card = styled.div`
  ${({ theme }) => css`
    min-height: 10rem;
    padding: ${theme.spacing.xsmall};
    background-color: ${theme.color.primary};
    box-shadow: 0.5rem 1rem 1rem -0.5rem rgba(255, 0, 127, 0.3);
    border-radius: ${theme.border.radius.large};
    transition: all ${theme.transition.fast};

    & > * {
      word-wrap: break-word;
    }

    &:active {
      box-shadow: 0rem 1.2rem 1rem -0.5rem rgba(255, 0, 127, 0.5) inset;
    }
  `};
`;

export { Card as CardWrapper };
