/**
 * Removes all falsy values from an array of strings.
 *
 * This function takes an array of strings and filters out any falsy values
 * such as `""`, `null`, `undefined`, `0`, `NaN`, and `false`.
 *
 * @param {string[]} value - The array of strings to be compacted.
 *
 * @returns {string[]} A new array of strings without any falsy values.
 *
 * @example
 *
 * const array = ["Hello", "", "World", null, "!", undefined];
 * const compactedArray = compact(array);
 * console.log(compactedArray); // Outputs: ["Hello", "World", "!"]
 */
export function compact(value: string[]) {
  return value?.filter(Boolean);
}
