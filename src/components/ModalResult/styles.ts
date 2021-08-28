// @ts-nocheck
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<Props>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: ${theme.spacing.small} 0;
  `};
`;

export const AvatarWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 16rem;

    ${theme.media.below('medium')`
      padding: 0 12rem;
    `};

    ${theme.media.below('small')`
      padding: 0 2rem;
    `};
  `};
`;

export const StatusWrapper = styled.div<Props>`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 16rem;

    ${theme.media.below('medium')`
      padding: 4rem 12rem;
    `};

    ${theme.media.below('small')`
      padding: 4rem 2rem;
    `};
  `};
`;

export const SocialMediaWrapper = styled.div<Props>`
  ${({ theme }) => css`
    padding: 0 20rem;

    ${theme.media.below('small')`
      padding: 0 6rem;
    `};
  `};
`;
