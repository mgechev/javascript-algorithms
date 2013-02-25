var array = [5, 8, 53, 56, 123, 322, 400, 2356, 8000, 23333];

/**
 * Searchs for specific element in given array using the binary search algorithm.
 * It's complexity is O(log n)
 *
 * @public
 * @param {array} array Input array
 * @param {number} key The key of the element which index we should find
 * @returns {number} index The index of the element or -1 if not found
 */
function binarySearch(array, key) {
    var middle = Math.round(array.length / 2),
        left = 0,
        right = array.length;
    while (right >= left) {
        if (array[middle] === key) {
            return middle;
        } else if (array[middle] > key) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    return -1;
}

console.log(array);
console.log(5, binarySearch(array, 5));
console.log(8, binarySearch(array, 8));
console.log(53, binarySearch(array, 53));
console.log(56, binarySearch(array, 56));
console.log(123, binarySearch(array, 123));
console.log(322, binarySearch(array, 322));
console.log(400, binarySearch(array, 400));
console.log(2356, binarySearch(array, 2356));
console.log(8000, binarySearch(array, 8000));
console.log(8001, binarySearch(array, 8001));
console.log(23333, binarySearch(array, 23333));
