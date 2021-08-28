import { Rename } from '.';

describe('Rename', () => {
  it('should pick a property of a type and rename it', () => {
    type Original = { name: string; age: number };
    const original: Original = { name: 'Mathews', age: 19 };

    type Renamed = Rename<Original, 'name', 'identifier'> &
      Rename<Original, 'age', 'count'>;
    const renamed: Renamed = { identifier: 'Machado', count: 20 };

    expect(renamed).not.toHaveProperty('name', original.name);
    expect(renamed).not.toHaveProperty('age', original.age);

    expect(renamed).toHaveProperty('identifier', 'Machado');
    expect(renamed).toHaveProperty('count', 20);
  });
});
