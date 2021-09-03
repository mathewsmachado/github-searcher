/* eslint-disable class-methods-use-this */

import { throttle, debounce } from '.';

describe('throttle', () => {
  const MOCK_DELAY = 2000;

  let time = MOCK_DELAY + 1;
  let calledTimes = 0;

  beforeEach(() => {
    global.Date = class {
      getTime() {
        calledTimes += 1;
        return time * calledTimes;
      }
    } as any;
  });

  it('should call the callback', () => {
    const callback = jest.fn();
    const realThrottle = throttle(callback, MOCK_DELAY);

    expect(callback).not.toBeCalled();

    realThrottle();
    expect(callback).toBeCalledTimes(1);

    realThrottle();
    realThrottle();
    expect(callback).toBeCalledTimes(3);
  });

  it('should call the callback once in the specified time', () => {
    const callback = jest.fn();
    const realThrottle = throttle(callback, MOCK_DELAY);

    expect(callback).not.toBeCalled();

    realThrottle();
    expect(callback).toBeCalledTimes(1);

    /**
     * In the real function, time is equal current execution time - the last
     * execution time, and it needs to be greater than the delay to the
     * callback be called again.
     *
     * Setting the time to a number below than the delay simulates that the
     * necessary time to the callback be called again has not passed.
     */
    time = 0;

    realThrottle();
    realThrottle();
    expect(callback).toBeCalledTimes(1);
  });

  describe('debounce', () => {
    it('should call the callback only after the specified time is finished', () => {
      const callback = jest.fn();
      const realDebounce = debounce(callback, 2000);

      jest.useFakeTimers();

      expect(callback).not.toBeCalled();

      realDebounce();
      jest.runAllTimers();

      expect(callback).toBeCalledTimes(1);

      realDebounce();
      realDebounce();
      jest.runAllTimers();

      expect(callback).toBeCalledTimes(2);
    });
  });
});
