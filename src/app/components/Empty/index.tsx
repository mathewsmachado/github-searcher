// @ts-nocheck
import styled, { css } from 'styled-components';

import { GithubSearcherIcon } from 'app/components';

export const EmptyWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${theme.media.below('small')`
      justify-content: center;
    `};
  `};
`;

const Text = styled.h2`
  ${({ theme }) => css`
    color: ${theme.color.primary};
    font-size: ${theme.font.size.huge};
    font-weight: ${theme.font.weight.bold};

    ${theme.media.below('medium')`
      font-size: 3.2rem;
    `};

    ${theme.media.below('small')`
      display: none;
    `};
  `};
`;

const IconWrapper = styled.div`
  max-width: 20rem;
  width: 100%;
`;

export type EmptyProps = {
  text: string;
};

export function Empty({ text }: EmptyProps) {
  return (
    <EmptyWrapper>
      <Text>{text}</Text>
      <IconWrapper>
        <GithubSearcherIcon />
      </IconWrapper>
    </EmptyWrapper>
  );
}
