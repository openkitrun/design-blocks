import { compact } from '..';

describe('compact', () => {
  it('should remove all falsy values from an array of strings', () => {
    expect(compact(['Hello', '', 'World', '!'])).toEqual(['Hello', 'World', '!']);
  });

  it('should return an empty array if all values are falsy', () => {
    expect(compact([''])).toEqual([]);
  });

  it('should return the same array if there are no falsy values', () => {
    expect(compact(['Hello', 'World', '!'])).toEqual(['Hello', 'World', '!']);
  });
});
