import { darkBackground, disableArgTypes } from '.';

describe('disableArgType', () => {
  it('should match the expected object', () => {
    expect(disableArgTypes(['as'])).toMatchObject({
      argTypes: { as: { table: { disable: true } } },
    });

    expect(disableArgTypes(['as', 'ref', 'theme'])).toMatchObject({
      argTypes: {
        as: { table: { disable: true } },
        ref: { table: { disable: true } },
        theme: { table: { disable: true } },
      },
    });

    expect(disableArgTypes(['as'], false)).toMatchObject({
      as: { table: { disable: true } },
    });

    expect(disableArgTypes(['as', 'ref', 'theme'], false)).toMatchObject({
      as: { table: { disable: true } },
      ref: { table: { disable: true } },
      theme: { table: { disable: true } },
    });
  });
});

describe('darkBackground', () => {
  it('should match the expected object', () => {
    expect(darkBackground()).toMatchObject({
      parameters: { backgrounds: { default: 'dark' } },
    });

    expect(darkBackground(false)).toMatchObject({
      backgrounds: { default: 'dark' },
    });
  });
});
