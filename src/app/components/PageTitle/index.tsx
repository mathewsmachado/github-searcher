import styled, { css } from 'styled-components';

export type PageTitleProps = {
  unfilledText: string;
  filledText: string;
};

const PageTitleWrapper = styled.h1`
  display: flex;
  flex-direction: column;
`;

const UnfilledText = styled.span`
  ${({ theme }) => css`
    font-size: 7rem;
    color: ${theme.color.secondary};
    -webkit-text-stroke: 2px ${theme.color.primary};

    ${theme.media.below('medium')`
      font-size: 5rem;
    `};
  `};
`;

const FilledText = styled.span`
  ${({ theme }) => css`
    font-size: 7rem;
    color: ${theme.color.accent};

    ${theme.media.below('medium')`
      font-size: 5rem;
    `};
  `};
`;

export function PageTitle({ unfilledText, filledText }: PageTitleProps) {
  return (
    <PageTitleWrapper>
      <UnfilledText>{unfilledText}</UnfilledText>
      <FilledText>{filledText}</FilledText>
    </PageTitleWrapper>
  );
}
