/**
 * Determines whether a value is undefined.
 *
 * This function checks if the provided value is `undefined` and
 * returns `true` if it is, and `false` otherwise.
 *
 * @param {any} val - The value to check.
 *
 * @returns {boolean} Returns `true` if the value is undefined, `false` otherwise.
 *
 * @example
 *
 * isUndefined(undefined);  // true
 * isUndefined(null);       // false
 * isUndefined('text');     // false
 */
export function isUndefined(val: any) {
  return val === undefined;
}
