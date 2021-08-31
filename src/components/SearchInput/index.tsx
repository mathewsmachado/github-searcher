import { ThrowsError } from 'utils/typescript';
import { Input } from 'components/Input';
import { VsSeparator } from 'components/VsSeparator';

import {
  SearchInputProps,
  isSingle,
  isDouble,
  isDoubleComposed,
} from './types';
import * as S from './styles';

export function SearchInput({
  inputOne,
  inputTwo,
  inputThree,
  inputFour,
  type = 'single',
}: SearchInputProps): ThrowsError | JSX.Element {
  const inputs = { inputOne, inputTwo, inputThree, inputFour };

  if (
    (type === 'single' && !isSingle(inputs)) ||
    (type === 'double' && !isDouble(inputs)) ||
    (type === 'doubleComposed' && !isDoubleComposed(inputs))
  ) {
    throw new Error('"type" mismatch with the passed inputs.');
  }

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
