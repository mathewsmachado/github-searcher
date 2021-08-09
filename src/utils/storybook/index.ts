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

export { removeArgType };
