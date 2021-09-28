/* eslint-disable no-console */
import { getFromLocalStorage, setIntoLocalStorage } from '.';

const KEY = 'TEST';
const person = { name: 'mathews', is: 'person' };

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key: string) {
      // @ts-ignore
      return store[key].toString() || null;
    },
    setItem(key: string, value: any) {
      if (value === 'null') {
        throw new Error();
      }
      // @ts-ignore
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

afterEach(() => window.localStorage.clear());
afterAll(() => jest.clearAllMocks());

describe('getFromLocalStorage', () => {
  it('should get an item', () => {
    window.localStorage.setItem(KEY, JSON.stringify(person));

    expect(getFromLocalStorage(KEY)).toEqual(person);
  });

  it("should log an error and return null if it can't retrieve the item", () => {
    jest.spyOn(console, 'error').mockReturnValue();

    expect(getFromLocalStorage(KEY)).toBe(null);
    expect(console.error).toBeCalledWith(
      'Unable to fetch item from localStorage'
    );
  });
});

describe('setIntoLocalStorage', () => {
  it('should set an item', () => {
    setIntoLocalStorage(KEY, person);

    expect(JSON.parse(window.localStorage.getItem(KEY)!)).toStrictEqual(person);
  });

  it('should overlap the item value if it already exists', () => {
    const app = { name: 'github searcher', is: 'application' };

    setIntoLocalStorage(KEY, person);
    setIntoLocalStorage(KEY, app);

    expect(JSON.parse(window.localStorage.getItem(KEY)!)).toStrictEqual(app);
  });

  it("should log an error if it can't set an item", () => {
    jest.spyOn(console, 'error');

    setIntoLocalStorage(KEY, null);

    expect(console.error).toBeCalledWith(
      'Unable to insert data into localStorage'
    );
  });
});
