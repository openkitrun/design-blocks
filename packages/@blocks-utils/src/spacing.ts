import R from 'ramda';

/**
 * Multiplies a value by a base spacing value.
 *
 * This function multiplies the provided value by a base spacing value,
 * which defaults to 8 if not provided. The multiplication is done using
 * the Ramda library.
 *
 * @param {number} val - The value to be multiplied.
 * @param {number} [baseSpacing=8] - The base spacing value. Default is 8.
 *
 * @returns {number} The result of the multiplication.
 *
 * @example
 *
 * spacing(2);     // 16
 * spacing(3, 10); // 30
 */
export function spacing(val: number, baseSpacing = 8): number {
  const value = R.multiply(val, baseSpacing);
  return value;
}

export default spacing;
