import { darkBackground, removeArgType } from '.';

describe('removeArgTypeFromControls', () => {
  it('should return an object with the keys being the passed arguments', () => {
    expect(removeArgType('as')).toHaveProperty('as');

    const result = removeArgType('as', 'ref', 'theme');

    expect(result).toHaveProperty('as');
    expect(result).toHaveProperty('ref');
    expect(result).toHaveProperty('theme');
  });

  it(`should return an object with each value being
  '{ table: { disable: true } }'`, () => {
    expect(removeArgType('as')).toMatchObject({
      as: { table: { disable: true } },
    });

    expect(removeArgType('as', 'ref', 'theme')).toMatchObject({
      as: { table: { disable: true } },
      ref: { table: { disable: true } },
      theme: { table: { disable: true } },
    });
  });
});

describe('darkBackground', () => {
  it('should return match the expected object', () => {
    expect(darkBackground()).toMatchObject({
      parameters: { backgrounds: { default: 'dark' } },
    });

    expect(darkBackground(false)).toMatchObject({
      backgrounds: { default: 'dark' },
    });
  });
});
