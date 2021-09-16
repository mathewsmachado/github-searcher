// @ts-nocheck
import styled, { css } from 'styled-components';

import { GithubSearcherIcon } from 'components/GithubSearcherIcon';
import {
  SecondaryHeading,
  SecondaryHeadingWrapper,
} from 'components/SecondaryHeading';

export const EmptyWrapper = styled.section`
  ${({ theme }) => css`
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${theme.media.below('small')`
      justify-content: center;
    `};

    ${SecondaryHeadingWrapper} {
      ${theme.media.below('medium')`
        font-size: 3.2rem;
      `};

      ${theme.media.below('small')`
        display: none;
      `};
    }
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
      <SecondaryHeading>{text}</SecondaryHeading>
      <IconWrapper>
        <GithubSearcherIcon />
      </IconWrapper>
    </EmptyWrapper>
  );
}
