import { get } from '..';

describe('get', () => {
  const obj = {
    a: {
      b: {
        c: 100,
        d: null,
      },
    },
    'x.y': { z: 200 },
  };

  it('should return the value at a given path', () => {
    expect(get(obj, 'a.b.c')).toBe(100);
  });

  it('should handle array-like paths', () => {
    expect(get(obj, 'a.b[1].c')).toBe(undefined);
  });

  it('should return defaultValue if the path does not exist', () => {
    expect(get(obj, 'a.b.e', 'default')).toBe('default');
  });

  it('should handle complex paths', () => {
    expect(get(obj, 'x.y.z')).toBe(undefined);
  });

  it('should return undefined for invalid paths', () => {
    expect(get(obj, undefined)).toBe(undefined);
  });

  it('should handle null or undefined object', () => {
    expect(get(null, 'a')).toBe(undefined);
    expect(get(undefined, 'a')).toBe(undefined);
  });

  it('should return the direct property value if path is a direct key of object', () => {
    const obj = {
      directKey: 'directValue',
      a: { b: { c: 100 } },
    };

    expect(get(obj, 'directKey')).toBe('directValue');
  });

  it('should return the direct property value if resultFinal is undefined or equal to obj', () => {
    const obj = {
      a: undefined,
      b: 'directValue',
    };

    expect(get(obj, 'a')).toBe(undefined);
    expect(get(obj, 'b')).toBe('directValue');
  });

  it('should return the direct property value if path is a direct key of object', () => {
    const obj = {
      directKey: 'directValue',
      a: { b: { c: 100 } },
      '': 'emptyStringKey',
    };

    expect(get(obj, 'directKey')).toBe('directValue');
    expect(get(obj, '')).toBe('emptyStringKey');
  });
});
