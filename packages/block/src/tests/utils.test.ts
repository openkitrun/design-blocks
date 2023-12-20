import { interleave } from '../utils';

describe('interleave', () => {
  it('should interleave strings and values correctly', () => {
    const result = interleave(['Hello, ', '!']);
    expect(result).toEqual(['H', '!', 'e']);
  });

  it('should handle multiple values', () => {
    const result = interleave(['Hello, ', ' and ', '!']);
    expect(result).toEqual(['H', ' and ', 'e', '!', 'l']);
  });

  it('should handle no values', () => {
    const result = interleave(['Hello, world!']);
    expect(result).toEqual(['H']);
  });

  it('should handle more strings than values', () => {
    const result = interleave(['Hello, ', ' and ', '']);
    expect(result).toEqual(['H', ' and ', 'e', '', 'l']);
  });

  it('should handle more values than strings', () => {
    const result = interleave(['Hello, ']);
    expect(result).toEqual(['H']);
  });

  it('should handle undefined string values in the array', () => {
    const result = interleave(['', undefined, '']);
    expect(result).toEqual([undefined, undefined, '']);
  });
});
