import { Input, InputProps } from 'components/Input';
import { VsSeparator } from 'components/VsSeparator';

import * as S from './styles';

type Base = {
  inputOne: InputProps;
};

type Single = {
  type?: S.Single;
  inputTwo?: undefined;
  inputThree?: undefined;
  inputFour?: undefined;
};

type Double = {
  type: S.Double;
  inputTwo: InputProps;
  inputThree?: undefined;
  inputFour?: undefined;
};

type DoubleComposed = {
  type: S.DoubleComposed;
  inputTwo: InputProps;
  inputThree: InputProps;
  inputFour: InputProps;
};

type SearchInputProps = Base & (Single | Double | DoubleComposed);

function SearchInput({
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
  type = 'single',
}: SearchInputProps) {
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

export { SearchInput };
export type { SearchInputProps };
