import { InputHTMLAttributes } from 'react';

import { GithubSearcherIcon } from 'components/GithubSearcherIcon';

import * as S from './styles';

type InputProps = S.Props &
  InputHTMLAttributes<HTMLInputElement> & {
    icon?: boolean;
  };

function Input({ icon = false, error = '', ...props }: InputProps) {
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

export { Input };
export type { InputProps };
