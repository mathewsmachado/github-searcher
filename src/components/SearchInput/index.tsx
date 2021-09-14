import { Input, InputProps } from 'components/Input';
import { VsSeparator } from 'components/VsSeparator';

import * as S from './styles';

type Base = {
  inputOne: InputProps;
};

type Single = {
  inputTwo?: undefined;
  inputThree?: undefined;
  inputFour?: undefined;
};

type Double = {
  inputTwo: InputProps;
  inputThree?: undefined;
  inputFour?: undefined;
};

type DoubleComposed = {
  inputTwo: InputProps;
  inputThree: InputProps;
  inputFour: InputProps;
};

export type SearchInputProps = Base & (Single | Double | DoubleComposed);

function getType({
  inputThree,
  inputTwo,
}: Omit<SearchInputProps, 'inputOne' | 'inputFour'>): S.Props['type'] {
  if (inputThree) return 'doubleComposed';
  if (inputTwo) return 'double';
  return 'single';
}
export function SearchInput({
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
}: SearchInputProps) {
  const type = getType({ inputThree, inputTwo });

  return (
    <S.SearchInputWrapper type={type}>
      {type === 'single' && <Input icon {...inputOne} />}
      {type === 'double' && (
        <>
          <Input {...inputOne} />
          <S.Separator>by</S.Separator>
          <Input {...inputTwo} />
        </>
      )}
      {type === 'doubleComposed' && (
        <>
          <S.InputWrapper>
            <Input {...inputOne} />
            <S.Separator>by</S.Separator>
            <Input {...inputTwo} />
          </S.InputWrapper>

          <VsSeparator orientation='horizontal' />

          <S.InputWrapper>
            <Input {...inputThree} />
            <S.Separator>by</S.Separator>
            <Input {...inputFour} />
          </S.InputWrapper>
        </>
      )}
    </S.SearchInputWrapper>
  );
}

export { SearchInputWrapper } from './styles';
