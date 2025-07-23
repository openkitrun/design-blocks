import { weakMemoize } from '../weakMemoize';

describe('weakMemoize', () => {
  it('should memoize the result of a function', () => {
    const func = jest.fn((x) => x.value * 2);
    const memoizedFunc = weakMemoize(func);

    const arg = { value: 10 };
    const firstCallResult = memoizedFunc(arg);
    const secondCallResult = memoizedFunc(arg);

    expect(firstCallResult).toBe(20);
    expect(secondCallResult).toBe(20);
    expect(func).toHaveBeenCalledTimes(1);
  });
});
