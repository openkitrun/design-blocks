import { isNumber } from '..';

describe('isNumber', () => {
  it('should return true for numbers', () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-10)).toBe(true);
  });

  it('should return false for non-numbers', () => {
    expect(isNumber('5')).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
