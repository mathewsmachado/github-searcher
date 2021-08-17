import styled, { css } from 'styled-components';

type StatusProps = {
  count: number;
  label: string;
};

const Wrapper = styled.div`
  text-align: center;
`;

const Count = styled.span`
  ${({ theme }) => css`
    display: block;
    padding-bottom: ${theme.spacing.xxsmall};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.xbold};
    color: ${theme.color.accent};
  `};
`;

const Label = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.small};
    font-weight: ${theme.font.weight.normal};
    color: ${theme.color.secondary};
  `};
`;

export function Status({ count, label }: StatusProps) {
  return (
    <Wrapper>
      <Count>{count}</Count>
      <Label>{label}</Label>
    </Wrapper>
  );
}
