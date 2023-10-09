/**
 * Removes empty objects from an array of objects.
 *
 * This function takes an array of objects and filters out any objects
 * that are empty (i.e., have no own properties).
 *
 * @param {Object[]} stylesList - The array of objects to filter.
 *
 * @returns {Object[]} A new array with empty objects removed.
 *
 * @example
 *
 * const array = [{ a: 1 }, {}, { b: 2 }, {}];
 * const filteredArray = removeEmptyObjects(array);
 * console.log(filteredArray); // [{ a: 1 }, { b: 2 }]
 */
export const removeEmptyObjects = (stylesList: { [key: string]: any }[]) => {
  return stylesList.filter((element) => {
    if (Object.keys(element).length !== 0) {
      return true;
    }

    return false;
  });
};
