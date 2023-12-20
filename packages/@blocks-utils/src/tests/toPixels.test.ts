import { toPixels } from '..';

describe('toPixels', () => {
  it('should convert a number to a pixel string', () => {
    expect(toPixels(5)).toBe('5px');
    expect(toPixels(100)).toBe('100px');
  });
});
