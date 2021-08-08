import { PrimaryHeading } from 'components/PrimaryHeading';

import * as S from './styles';
import { LogoProps, SvgMapper } from './types';
import black from './black.svg';
import white from './white.svg';

const svgMapper: SvgMapper = {
  primary: { src: black, alt: 'black "GitHub" word' },
  secondary: { src: white, alt: 'white "GitHub" word' },
};

export function Logo({ size = 'small', githubColor = 'primary' }: LogoProps) {
  const svg = svgMapper[githubColor];

  return (
    <S.Wrapper size={size}>
      <S.Svg size={size} src={svg.src} alt={svg.alt} />
      <PrimaryHeading color='accent'>Searcher</PrimaryHeading>
    </S.Wrapper>
  );
}
