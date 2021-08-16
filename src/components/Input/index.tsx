import { InputHTMLAttributes } from 'react';

import { GithubSearcherIcon } from 'components/GithubSearcherIcon';

import * as S from './styles';

type InputProps = S.WrapperProps & InputHTMLAttributes<HTMLInputElement>;

export function Input({ icon = false, error = '', ...props }: InputProps) {
  return (
    <>
      <S.Wrapper icon={icon} error={error}>
        {icon && <GithubSearcherIcon separator />}
        <S.InputField {...props} />
      </S.Wrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </>
  );
}
