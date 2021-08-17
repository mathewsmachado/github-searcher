import { CSSProperties } from 'react';

type DisableArgType =
  | { argTypes: { [K: string]: { table: { disable: boolean } } } }
  | { [K: string]: { table: { disable: boolean } } };

export function disableArgTypes(
  propsToDisable: string[],
  topLevel = true
): DisableArgType {
  const OBJECT_TOP_LEVEL_PROP = 'argTypes';
  const OBJECT_VALUE = { table: { disable: true } };

  const disabledProps = propsToDisable.reduce(
    (acc, curr) => ({ ...acc, [curr]: OBJECT_VALUE }),
    {}
  );

  return topLevel ? { [OBJECT_TOP_LEVEL_PROP]: disabledProps } : disabledProps;
}

type DarkBackground =
  | { parameters: { backgrounds: { default: 'dark' } } }
  | { backgrounds: { default: 'dark' } };

export function darkBackground(topLevel = true): DarkBackground {
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
