function id(val) {
  return val;
}

function get(key) {
  return function (val) {
    return val[key];
  };
}

/**
 * Searches for a specific element in a given array using
 * the binary search algorithm.
 * Time complexity: O(log N).
 *
 * @example
 *
 * const { binarySearch } = require('./binarysearch');
 * console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3
 *
 * @public
 * @param {Array} array Input array.
 * @param {Number} value Value of the element which index should be found.
 * @param {String|Function} key Optional. If the array contains objects, specify a key to search by.
 * @returns {Number} Index of the element or -1 if not found.
 */

const binarySearch = (array, value, key) => {
  key = !key ? id : typeof key === 'string' ? get(key) : key;
  value = key(value);
  let middle = Math.floor(array.length / 2);
  let left = 0;
  let right = array.length;

  while (right >= left) {
    let middleValue = key(array[middle]);
    if (middleValue === value) {
      return middle;
    } else if (middleValue > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return -1;
}

module.exports = {
  binarySearch
};
