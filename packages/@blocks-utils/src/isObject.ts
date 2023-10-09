/**
 * Determines whether a value is a non-array object.
 *
 * This function checks if the provided value is an object and not an array.
 *
 * @param {unknown} item - The value to check.
 *
 * @returns {boolean} Returns `true` if the value is an object (and not an array), `false` otherwise.
 *
 * @example
 *
 * isObject({ a: 1 });  // true
 * isObject([1, 2]);   // false
 * isObject('text');   // false
 */
export function isObject(item: unknown): item is Record<string, unknown> {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}
