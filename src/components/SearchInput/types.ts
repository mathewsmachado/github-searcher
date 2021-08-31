import { InputProps } from 'components/Input';

type Single = {
  inputOne: InputProps;
};

type Double = Single & {
  inputTwo?: InputProps;
};

type DoubleComposed = Double & {
  inputThree?: InputProps;
  inputFour?: InputProps;
};

type WrapperProps = {
  type?: 'single' | 'double' | 'doubleComposed';
};

type Props = WrapperProps & DoubleComposed;

function isSingle(inputs: DoubleComposed): inputs is Single {
  const { inputOne, inputTwo, inputThree, inputFour } = inputs;

  if (!inputOne || !!inputTwo || !!inputThree || !!inputFour) {
    return false;
  }

  return true;
}

function isDouble(inputs: DoubleComposed): inputs is Double {
  const { inputOne, inputTwo, inputThree, inputFour } = inputs;

  if (!inputOne || !inputTwo || !!inputThree || !!inputFour) {
    return false;
  }

  return true;
}

function isDoubleComposed(inputs: DoubleComposed): inputs is DoubleComposed {
  const { inputOne, inputTwo, inputThree, inputFour } = inputs;

  if (!inputOne || !inputTwo || !inputThree || !inputFour) {
    return false;
  }

  return true;
}

export { isSingle, isDouble, isDoubleComposed };
export type { WrapperProps, Props as SearchInputProps };
