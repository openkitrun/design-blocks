/**
 * Determines whether a value is of type number.
 *
 * @param {any} value - The value to check.
 *
 * @returns {boolean} Returns `true` if the value is a number, `false` otherwise.
 *
 * @example
 *
 * isNumber(123);   // true
 * isNumber('123'); // false
 */
export function isNumber(value: any) {
  return typeof value === 'number';
}
