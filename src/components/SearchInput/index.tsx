import { Input, InputProps } from 'components/Input';
import { VsSeparator } from 'components/VsSeparator';

import * as S from './styles';

type SearchInputBase = {
  inputOne: InputProps;
};

type SearchInputSingle = {
  type?: 'single';
  inputTwo?: undefined;
  inputThree?: undefined;
  inputFour?: undefined;
};

type SearchInputDouble = {
  type: 'double';
  inputTwo: InputProps;
  inputThree?: undefined;
  inputFour?: undefined;
};

type SearchInputDoubleComposed = {
  type: 'doubleComposed';
  inputTwo: InputProps;
  inputThree: InputProps;
  inputFour: InputProps;
};

type SearchInputProps = SearchInputBase &
  (SearchInputSingle | SearchInputDouble | SearchInputDoubleComposed);

function SearchInput({
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
  type = 'single',
}: SearchInputProps) {
  return (
    <S.Wrapper type={type}>
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
    </S.Wrapper>
  );
}

export { SearchInput };
export type { SearchInputProps };
