var array = [2,3,5,1,2,4,7,9,0,3,3];

/**
 * Insertionsort algorithm. It's complexity is O(n^2).
 *
 * @public
 * @param {array} array Input array
 * @returns {array} array Sorted array
 */
function insertionSort(array) {
    var current,
        j;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j -= 1;
        }
        array[j + 1] = current;
    }
    return array;
}

console.log(insertionSort(array));
