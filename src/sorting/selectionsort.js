/**
 * Selection sort. It's complexity is O(n^2)
 *
 * @public
 * @param {array} array Array to be sorted
 * @return {array} The sorted array
 */
function selectionSort(array) {
    var min, idx, temp;
    for (var i = 0; i < array.length; i += 1) {
        idx = i;
        min = array[i];
        for (var j = i + 1; j < array.length; j += 1) {
            if (min > array[j]) {
                min = array[j];
                idx = j;
            }
        }
        temp = array[i];
        array[i] = min;
        array[idx] = temp;
    }
    return array;
}

