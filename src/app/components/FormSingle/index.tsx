import { FormEvent } from 'react';
import styled from 'styled-components';

import {
  ButtonSearch,
  ButtonSearchProps,
  Input,
  InputProps,
} from 'app/components';

export type FormSingleProps = Pick<ButtonSearchProps, 'loading'> & {
  inputData: InputProps;
  onSubmit: (e: FormEvent) => void;
};

export const FormSingleWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export function FormSingle({ loading, onSubmit, inputData }: FormSingleProps) {
  return (
    <FormSingleWrapper role='form' onSubmit={onSubmit}>
      <Input {...inputData} />
      <ButtonSearch type='submit' loading={loading} />
    </FormSingleWrapper>
  );
}
