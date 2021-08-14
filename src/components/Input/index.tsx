import { GithubSearcherIcon } from 'components/GithubSearcherIcon';

import * as S from './styles';
import { InputProps } from './types';

export function Input({ icon = false, error = '', ...props }: InputProps) {
  return (
    <>
      <S.Wrapper icon={icon} error={error}>
        {icon && <GithubSearcherIcon separator />}
        <S.Input icon={icon} {...props} />
      </S.Wrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </>
  );
}
