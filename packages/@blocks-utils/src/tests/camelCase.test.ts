import { camelCase } from '..';

describe('camelCase', () => {
  it('should convert a given string to camelCase format', () => {
    expect(camelCase('hello_world')).toBe('helloWorld');
    expect(camelCase('hello world')).toBe('helloWorld');
  });

  it('should handle empty strings correctly', () => {
    expect(camelCase('')).toBe('');
  });
});
