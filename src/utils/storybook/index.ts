type RemoveArgTypeReturn = { [K: string]: { table: { disable: boolean } } };

function removeArgType(propNames: string): RemoveArgTypeReturn;
function removeArgType(...propNames: string[]): RemoveArgTypeReturn;
function removeArgType(...propNames: string[]): RemoveArgTypeReturn {
  const OBJECT_VALUE = { table: { disable: true } };

  return propNames.reduce(
    (acc, curr) => ({ ...acc, [curr]: OBJECT_VALUE }),
    {}
  );
}

type DarkBackground =
  | { parameters: { backgrounds: { default: 'dark' } } }
  | { backgrounds: { default: 'dark' } };

export function darkBackground(topLevel = true): DarkBackground {
  const DARK_BACKGROUND: DarkBackground = { backgrounds: { default: 'dark' } };

  return topLevel ? { parameters: DARK_BACKGROUND } : DARK_BACKGROUND;
}

export { removeArgType };
