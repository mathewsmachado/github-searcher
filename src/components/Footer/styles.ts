import styled, { css } from 'styled-components';

export const FooterWrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${theme.spacing.xxlarge};
    background-color: ${theme.color.primary};

    ${theme.media.below('small')`
      padding: 0 1rem;
    `};
  `};
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xsmall};
    font-weight: ${theme.font.weight.medium};
    color: ${theme.color.secondary};
  `};
`;

export const IconsWrapper = styled.div`
  margin-top: 0.6rem;
  width: 9rem;
`;
