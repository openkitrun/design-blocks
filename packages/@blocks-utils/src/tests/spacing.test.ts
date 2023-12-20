import { spacing } from '..';

describe('spacing', () => {
  it('should calculate spacing based on the given value and base spacing', () => {
    expect(spacing(2)).toBe(16);
    expect(spacing(3, 10)).toBe(30);
  });

  it('should use default baseSpacing of 8 when not provided', () => {
    expect(spacing(2)).toBe(16); // 2 * 8 = 16
  });
});
