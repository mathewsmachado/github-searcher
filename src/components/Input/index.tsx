import { InputHTMLAttributes } from 'react';

import { GithubSearcherIcon } from 'components/GithubSearcherIcon';

import * as S from './styles';

type Props = S.Props & InputHTMLAttributes<HTMLInputElement>;

export function Input({ icon = false, error = '', ...props }: Props) {
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
