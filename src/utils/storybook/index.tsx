import { CSSProperties } from 'react';

type DisableArgType<T> = { [K in keyof T]: { table: { disable: boolean } } };
type DisableArgTypeReturn<T> =
  | { argTypes?: DisableArgType<T> }
  | DisableArgType<T>;

export function disableArgTypes<T>(
  propsToDisable: (keyof T)[],
  topLevel = true
): DisableArgTypeReturn<T> {
  const OBJECT_TOP_LEVEL_PROP = 'argTypes';
  const OBJECT_VALUE = { table: { disable: true } };

  const disabledProps = propsToDisable.reduce(
    (acc, curr) => ({ ...acc, [curr]: OBJECT_VALUE }),
    {}
  );

  return topLevel
    ? ({ [OBJECT_TOP_LEVEL_PROP]: disabledProps } as DisableArgTypeReturn<T>)
    : disabledProps;
}

type DarkBackground = { backgrounds: { default: 'dark' } };
type DarkBackgroundReturn = { parameters: DarkBackground } | DarkBackground;

export function darkBackground(topLevel = true): DarkBackgroundReturn {
  const OBJECT_PROP = 'parameters';
  const OBJECT_VALUE: DarkBackground = { backgrounds: { default: 'dark' } };

  return topLevel ? { [OBJECT_PROP]: OBJECT_VALUE } : OBJECT_VALUE;
}

type StoryContainerProps = {
  children: JSX.Element;
  style?: CSSProperties;
};

export function StoryContainer({
  children,
  style,
}: StoryContainerProps): JSX.Element {
  return (
    <div
      style={{
        maxWidth: '20rem',
        display: 'block',
        margin: '0 auto',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
