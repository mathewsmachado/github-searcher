import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Count = styled.span`
  ${({ theme }) => css`
    display: block;
    padding-bottom: ${theme.spacing.xxsmall};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.xbold};
    color: ${theme.color.accent};
  `};
`;

export const Label = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.normal};
    color: ${theme.color.secondary};
  `};
`;
