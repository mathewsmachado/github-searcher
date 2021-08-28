import styled, { css } from 'styled-components';

export type Props = {
  as?: 'a';
  direction?: 'column' | 'row';
  href?: string;
};

export const Wrapper = styled.div<Props>`
  ${({ theme, direction, as }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${theme.color.secondary};

    ${direction !== 'column' && modifiers.row()};
    ${as && modifiers.asLink()};
  `};
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 16rem;
    border: 0.4rem solid ${theme.color.accent};
    border-radius: ${theme.border.radius.rounded};
  `};
`;

export const TextWrapper = styled.div``;

export const NamesWrapper = styled.div``;

export const Name = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xxsmall};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.xbold};
    color: ${theme.color.accent};
  `};
`;

export const Username = styled.small`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xsmall};
    color: ${theme.color.accent};
  `};
`;

export const About = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xsmall};
    font-size: ${theme.font.size.xsmall};
    color: ${theme.color.secondary};
  `};
`;

const modifiers = {
  row: () => css`
    flex-direction: row;
    text-align: start;

    ${About} {
      margin-top: 0;
    }

    ${Username} {
      display: block;
      margin-left: 0.8rem;
    }

    ${Name} {
      margin-top: 0;
      font-size: 2.6rem;
    }

    ${NamesWrapper} {
      display: flex;
      align-items: baseline;
    }

    ${Image} {
      max-width: 6rem;
      margin-right: 1rem;
      border-width: 0.2rem;
    }
  `,
  asLink: () => css`
    cursor: pointer;
  `,
};
