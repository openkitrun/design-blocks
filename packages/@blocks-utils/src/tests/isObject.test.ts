import { isObject } from '..';

describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: 'value' })).toBe(true);
  });

  it('should return false for non-objects', () => {
    expect(isObject([])).toBe(false);
    expect(isObject(5)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
  });
});
