import { isObject } from './isObject';

/**
 * Deeply merges two objects, overriding and combining their properties.
 *
 * This function takes a target object and a source object, and merges
 * them together. If both the target and source contain properties that
 * are objects, those properties are recursively merged together.
 *
 * This function does not modify the original objects but rather returns
 * a new object that represents the merged result.
 *
 * Note: Arrays and non-object values in the source object will overwrite
 * matching values in the target object.
 *
 * @param {T} target - The target object that will be merged with the source.
 * @param {Partial<T>} source - The source object whose properties will override or combine with those of the target.
 *
 * @returns {T} A new object that results from deeply merging the target with the source.
 *
 * @example
 *
 * const obj1 = {
 *   a: 1,
 *   b: { x: 1, y: 2 }
 * };
 *
 * const obj2 = {
 *   a: 2,
 *   b: { x: 3, z: 4 },
 *   c: 5
 * };
 *
 * const mergedObj = deepMerge(obj1, obj2);
 * console.log(mergedObj); // Outputs: { a: 2, b: { x: 3, y: 2, z: 4 }, c: 5 }
 */
export function deepMerge<T extends Record<string, any>, S extends Partial<Record<keyof T, any>>>(
  target: T,
  source: S,
): T & S {
  const output: Record<string, any> = { ...target };

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const sourceValue = source[key];
        const targetValue = target[key];

        if (isObject(sourceValue) && isObject(targetValue)) {
          output[key] = deepMerge(targetValue, sourceValue);
        } else {
          output[key] = sourceValue;
        }
      }
    }
  }

  return output as T & S;
}

export default deepMerge;
