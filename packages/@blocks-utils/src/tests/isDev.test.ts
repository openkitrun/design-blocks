import { __DEV__ } from '..';

describe('__DEV__', () => {
  it('should be true in development environment', () => {
    expect(__DEV__).toBe(true);
  });
});
