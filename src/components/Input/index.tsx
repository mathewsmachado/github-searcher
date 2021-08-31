import { InputHTMLAttributes } from 'react';

import { GithubSearcherIcon } from 'components/GithubSearcherIcon';

import * as S from './styles';

type Props = S.Props &
  InputHTMLAttributes<HTMLInputElement> & {
    icon?: boolean;
  };

function Input({ icon = false, error = '', ...props }: Props) {
  return (
    <>
      <S.Wrapper error={error}>
        {icon && (
          <S.IconWrapper>
            <GithubSearcherIcon />
          </S.IconWrapper>
        )}
        <S.InputField {...props} />
      </S.Wrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </>
  );
}

export { Input };
export type { Props as InputProps };
