/**
 * Generates a string with the number and the px unit
 *
 * @param {value} number
 *
 * @returns {string}
 *
 * @example
 * numberToPixels(10) // '10px'
 * numberToPixels(10.5) // '10.5px'
 *
 */
export function toPixels(value: number): string {
  return `${value}px`;
}
