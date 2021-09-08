import { InputHTMLAttributes } from 'react';

import { GithubSearcherIcon } from 'components/GithubSearcherIcon';

import * as S from './styles';

export type InputProps = S.Props &
  InputHTMLAttributes<HTMLInputElement> & {
    icon?: boolean;
  };

export function Input({ icon = false, error = '', ...props }: InputProps) {
  return (
    <>
      <S.InputWrapper error={error}>
        {icon && (
          <S.IconWrapper>
            <GithubSearcherIcon />
          </S.IconWrapper>
        )}
        <S.InputField {...props} />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </>
  );
}

export { InputWrapper } from './styles';
