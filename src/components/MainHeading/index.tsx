import styled from 'styled-components';

import { PrimaryHeading } from 'components/PrimaryHeading';

const MainHeadingWrapper = styled.div`
  width: 100%;
`;

export type MainHeadingProps = {
  unfilledText: string;
  filledText: string;
};

export function MainHeading({ unfilledText, filledText }: MainHeadingProps) {
  return (
    <MainHeadingWrapper>
      <PrimaryHeading unfilled>{unfilledText}</PrimaryHeading>
      <PrimaryHeading color='accent'>{filledText}</PrimaryHeading>
    </MainHeadingWrapper>
  );
}
