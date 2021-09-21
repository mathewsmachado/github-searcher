/* eslint-disable no-console */
export function getFromLocalStorage<T extends any>(key: string): T | null {
  try {
    return JSON.parse(window.localStorage.getItem(key)!);
  } catch {
    console.error('Unable to fetch item from localStorage');
    return null;
  }
}

export function setIntoLocalStorage(key: string, valueToStore: any): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  } catch {
    console.error('Unable to insert data into localStorage');
  }
}
