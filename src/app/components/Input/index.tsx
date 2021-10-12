import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ForwardedRef,
} from 'react';

import * as S from './styles';

export type InputProps = S.Props &
  InputHTMLAttributes<HTMLInputElement> & {
    ref?: ForwardedRef<HTMLInputElement>;
  };

const input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error = '', ...props },
  ref
) => (
  <>
    <S.InputWrapper error={error}>
      <S.InputField ref={ref} {...props} />
      <S.ErrorText>{error || <>&nbsp;</>}</S.ErrorText>
    </S.InputWrapper>
  </>
);

export const Input = forwardRef(input);
export { InputWrapper } from './styles';
