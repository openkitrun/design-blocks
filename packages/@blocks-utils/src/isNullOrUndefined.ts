/**
 * Determines whether a value is null or undefined.
 *
 * This function checks if the provided value is either `null` or `undefined` and
 * returns `true` if either condition is met, and `false` otherwise.
 *
 * @param {any} value - The value to check.
 *
 * @returns {boolean} Returns `true` if the value is either null or undefined, `false` otherwise.
 *
 * @example
 *
 * isNullOrUndefined(null);     // true
 * isNullOrUndefined(undefined); // true
 * isNullOrUndefined('');       // false
 */
export function isNullOrUndefined(value: any) {
  return value == null;
}

export default isNullOrUndefined;
