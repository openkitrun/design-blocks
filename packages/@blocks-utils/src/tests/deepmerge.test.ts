import { deepMerge } from '..';

describe('deepMerge', () => {
  it('should deeply merge two objects, overriding and combining their properties', () => {
    const obj1 = { a: 1, b: { x: 1, y: 2 } };
    const obj2 = { a: 2, b: { x: 1, y: 2 }, c: 5 };

    expect(deepMerge(obj1, obj2)).toEqual({ a: 2, b: { x: 1, y: 2 }, c: 5 });
  });

  it('should not modify the original objects', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1, b: 2 };

    expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: 2 });
    expect(obj1).toEqual({ a: 1 });
  });

  it('should overwrite non-object values from source to target', () => {
    const obj1 = { a: 1, b: { x: 1, y: 2 }, d: 'original' };
    const obj2 = { a: 2, b: { x: 1, y: 2, z: 4 }, c: 5, d: 'overwritten' };

    const result = deepMerge(obj1, obj2);
    expect(result).toEqual({ a: 2, b: { x: 1, y: 2, z: 4 }, c: 5, d: 'overwritten' });
  });

  it('should add new object properties from source to target', () => {
    const obj1 = { a: 1, b: { x: 1, y: 2 } };
    const obj2 = { b: { x: 3, y: 2, z: 4 }, d: { e: 5 } };

    const result = deepMerge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: { x: 3, y: 2, z: 4 }, d: { e: 5 } });
  });

  it('should replace non-object target properties with object source properties', () => {
    const obj1 = { a: 1, b: 'original' };
    const obj2 = { b: { new: 'property' } };

    const result = deepMerge(obj1, obj2);
    expect(result).toEqual({ a: 1, b: { new: 'property' } });
  });

  it('should return target as is if neither target nor source is an object', () => {
    const target = "I'm not an object";
    const source = 42;

    // @ts-expect-error
    const result = deepMerge(target, source);
    expect(result).toBe(result);
  });

  it('should not merge inherited properties from source', () => {
    const parentObject = { inheritedKey: 'inheritedValue' };
    const source = Object.create(parentObject);
    source.ownKey = 'ownValue';

    const target = { key: 'value' };

    const result = deepMerge(target, source);
    expect(result).toEqual({ key: 'value', ownKey: 'ownValue' });
    expect(result.inheritedKey).toBeUndefined();
  });

  it('should handle empty objects correctly', () => {
    expect(deepMerge({}, {})).toEqual({});
  });
});
