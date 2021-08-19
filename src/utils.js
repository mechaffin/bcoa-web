import { first } from "lodash";

/**
 * Converts an array to a map, using the valued in keyField as the the key in
 * the map.
 *
 * @param {Array<Object>} array The array of elements to convert
 * @param {function} modifier An optional modifier function to run on each element to the array
 * @param {string} keyField The field of the objects in the array to use as the key in the map
 * @param {Object} modifierParams Optional parameter for the modifier function
 * @return {Map<any, Object>} A map of the elements in the array
 */
export function arrayToMap(
  array,
  modifier,
  keyField = "id",
  ...modifierParams
) {
  return (
    array &&
    array.reduce((acc, elem) => {
      acc[elem[keyField]] = modifier ? modifier(elem, ...modifierParams) : elem;
      return acc;
    }, {})
  );
}

/**
 * Used with `Array.sort` to compare two different objects, so that they can
 * be displayed ASC alphabetically (ignoring case).
 * @param {Object} left   Left side of the comparison
 * @param {Object} right  Right side of the comparison
 */
export const sortAsc = (left, right) => {
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
};

/**
 * Used with `Array.sort` to compare two different objects, so that they can
 * be displayed ASC alphabetically (ignoring case).
 * @param {Object} left   Left side of the comparison
 * @param {Object} right  Right side of the comparison
 */
export const sortDesc = (left, right) => {
  if (left < right) return 1;
  if (left > right) return -1;
  return 0;
};

/**
 * Used with `Array.sort` to compare two different objects, so that they can
 * be displayed ASC alphabetically (ignoring case) by a given string property.
 * @param {Object} left   Left side of the comparison
 * @param {Object} right  Right side of the comparison
 * @param {String} propName   Name of the String property on each object to compare by.
 */
export const sortByStringPropAsc = (left, right, propName) => {
  const leftName = left[propName] ? left[propName].toUpperCase() : null;
  const rightName = right[propName] ? right[propName].toUpperCase() : null;
  return sortAsc(leftName, rightName);
};

/**
 * Used with `Array.sort` to compare two different objects, so that they can
 * be displayed DESC alphabetically (ignoring case) by a given string property.
 * @param {Object} left   Left side of the comparison
 * @param {Object} right  Right side of the comparison
 * @param {String} propName   Name of the String property on each object to compare by.
 */
export const sortByStringPropDesc = (left, right, propName) => {
  return sortByStringPropAsc(right, left, propName);
};

/**
 * Get the full title data by the level.
 * @param {Array<Object>} titles Title list from data lookup.
 * @param {int} level Number of the title's level
 */
export const getTitleByLevel = (titles, level) => {
  return first(Object.values(titles).filter((t) => t.level === level));
};
