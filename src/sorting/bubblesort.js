var array = [3,5,2,4,7,9,6,4,5];

/**
 * The bubblesort algorithm. Complexity O(n^2).
 *
 * @public
 * @param {array} array Input array
 * @returns {array} array Sorted array
 */
function bubbleSort(array) {
    var temp;
    for (var i = 0; i < array.length; i += 1) {
        for (var j = i; j > 0; j -= 1) {
            if (array[j] < array[j - 1]) {
                temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));
