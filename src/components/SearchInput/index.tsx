import { Input, InputProps } from 'components/Input';
import { VsSeparator } from 'components/VsSeparator';

import * as S from './styles';

type Single = [InputProps];

type Double = [...Single, ...Single];

type DoubleComposed = [...Double, ...Double];

export type SearchInputProps = {
  inputsData: Single | Double | DoubleComposed;
};

function getType(
  two: InputProps | undefined,
  three: InputProps | undefined
): S.Props['type'] {
  if (three) return 'doubleComposed';
  if (two) return 'double';
  return 'single';
}

export function SearchInput({ inputsData }: SearchInputProps) {
  const [one, two, three, four] = inputsData;
  const type = getType(two, three);

  return (
    <S.SearchInputWrapper type={type}>
      {type === 'single' && <Input icon {...one} />}
      {type === 'double' && (
        <>
          <Input {...one} />
          <S.Separator>by</S.Separator>
          <Input {...two} />
        </>
      )}
      {type === 'doubleComposed' && (
        <>
          <S.InputWrapper>
            <Input {...one} />
            <S.Separator>by</S.Separator>
            <Input {...two} />
          </S.InputWrapper>

          <VsSeparator orientation='horizontal' />

          <S.InputWrapper>
            <Input {...three} />
            <S.Separator>by</S.Separator>
            <Input {...four} />
          </S.InputWrapper>
        </>
      )}
    </S.SearchInputWrapper>
  );
}

export { SearchInputWrapper } from './styles';
