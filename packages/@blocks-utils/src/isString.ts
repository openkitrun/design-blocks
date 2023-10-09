/**
 * Determines whether a value is of type string.
 *
 * @param {any} value - The value to check.
 *
 * @returns {boolean} Returns `true` if the value is a string, `false` otherwise.
 *
 * @example
 *
 * isString('text');   // true
 * isString(123);      // false
 */
export function isString(value: any) {
  return typeof value === 'string';
}

export default isString;
